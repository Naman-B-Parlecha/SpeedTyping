import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  async function handleSignOut() {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleSignOut}>signout</button>
    </div>
  );
}
