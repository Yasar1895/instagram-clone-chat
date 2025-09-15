import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ChatWindow from "./components/ChatWindow";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import { useAuth } from "./contexts/AuthContext";

export default function App() {
  const { user } = useAuth();      // Get logged-in user from AuthContext
  const [convId, setConvId] = useState("general"); // Default conversation

  // If not logged in, show Login page
  if (!user) return <Login />;

  return (
    <div className="app" style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <Navbar onSelectChat={setConvId} />

      {/* Main content: Posts + Chat */}
      <div
        className="main-content"
        style={{ display: "flex", flex: 1, overflow: "hidden" }}
      >
        {/* Post Feed */}
        <PostList />

        {/* Chat Window */}
        <ChatWindow convId={convId} />
      </div>

      {/* Create Post / Upload */}
      <CreatePost />
    </div>
  );
}