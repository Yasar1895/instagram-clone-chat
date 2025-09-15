import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login, signup } = useAuth();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSignup) {
      await signup(displayName, email, password, null);
    } else {
      await login(email, password);
    }
  }

  return (
    <div className="login-page">
      <h2>{isSignup ? "Sign Up" : "Login"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <input
            placeholder="Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        )}
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
      </form>
      <p onClick={() => setIsSignup(!isSignup)} style={{ cursor: "pointer" }}>
        {isSignup ? "Already have an account? Login" : "Don't have an account? Sign up"}
      </p>
    </div>
  );
}
