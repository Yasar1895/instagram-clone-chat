import React from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar({ onSelectChat }) {
  const { user, logout } = useAuth();

  return (
    <div className="navbar">
      <h2>Instagram Clone</h2>
      <div className="nav-right">
        <span>{user?.displayName}</span>
        <button onClick={logout}>Logout</button>
        <button onClick={() => onSelectChat("general")}>Chat</button>
      </div>
    </div>
  );
}
