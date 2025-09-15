import React, { useEffect, useState, useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { listenMessages, sendMessage } from "../api/firebaseApi";

export default function ChatWindow({ convId }) {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const bottomRef = useRef();

  useEffect(() => {
    if (!convId) return;
    const unsub = listenMessages(convId, (msgs) => setMessages(msgs));
    return () => unsub();
  }, [convId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    if (!text.trim()) return;
    await sendMessage(convId, user.uid, text);
    setText("");
  }

  if (!convId) return <div className="chat-window empty">Select a conversation</div>;

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((m) => (
          <div key={m.id} className={`message ${m.from === user.uid ? "me" : "them"}`}>
            {m.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="chat-input">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message"
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
