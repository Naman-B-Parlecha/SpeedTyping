import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Typingtest.scss";

export default function TypingTest() {
  const navigate = useNavigate();
  async function handleSignOut() {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="typeTestPageCon">
      <NavBar />
    </div>
  );
}
