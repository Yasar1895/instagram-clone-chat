import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import { useAuth } from "./contexts/AuthContext";

export default function App() {
  const { user } = useAuth();
  const [convId, setConvId] = useState(null);

  if (!user) return <Login />;

  return (
    <div className="app">
      <Navbar onSelectChat={setConvId} />
      <div className="main-content">
        <PostList />
        <ChatWindow convId={convId} />
      </div>
      <CreatePost />
    </div>
  );
}
