import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Loginpage.scss";
import Input from "../components/Input";
import Form from "../components/Form";
import backImage from "../assets/backImage.jpg";

import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function LoginPage() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("Sign Up");
  const [imagePos, setImagePos] = useState("position-right");

  const [signUpDetails, setSignUpDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  function changeMode() {
    if (mode === "Sign Up") {
      setMode("Sign In");
      setImagePos("position-left");
    } else {
      setMode("Sign Up");
      setImagePos("position-right");
    }
    setError("");
    console.log(mode, imagePos);
  }

  function signUpChangeHandler(identifier, event) {
    setError("");
    setSignUpDetails((prev) => ({ ...prev, [identifier]: event.target.value }));
  }
  function signInChangeHandler(identifier, event) {
    setError("");
    setSignInDetails((prev) => ({ ...prev, [identifier]: event.target.value }));
  }

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      if (
        signUpDetails.username === "" ||
        !signUpDetails.email.includes("@") ||
        signUpDetails.password.length < 6
      ) {
        throw new Error("Kindly fill all the fields correctly.");
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpDetails.email,
        signUpDetails.password
      );

      console.log(userCredential);
      let user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user.accessToken);
      console.log("user", user.displayName);
      navigate("/");
      setSignUpDetails((prev) => ({
        ...prev,
        username: "",
        email: "",
        password: "",
      }));
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }
  async function handleSignIn(e) {
    e.preventDefault();

    try {
      if (
        !signInDetails.email.includes("@") ||
        signInDetails.password.length < 6
      ) {
        throw new Error("No such user found. Kindly check your credentials.");
      }
      const userCredential = await signInWithEmailAndPassword(
        auth,
        signInDetails.email,
        signInDetails.password
      );
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", user.accessToken);
      console.log("user", user);

      navigate("/");
      setSignInDetails((prev) => ({ ...prev, email: "", password: "" }));
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        setError("No such user found. Kindly check your credentials.");
      } else {
        setError(error.message);
      }
      console.log(error.message);
    }
  }
  return (
    <div className="loginpagecon">
      <div className="secondaryLogin">
        <Form
          registerTitle={"REGISTER NOW"}
          headerTitle={"Sign Up For Free."}
          headerDesp={"Already have an account?"}
          mode={"Sign In."}
          currentMode={"Sign Up"}
          changeMode={changeMode}
          onSubmit={handleSignUp}
        >
          <Input
            label={"Username"}
            placeholder="username"
            type="text"
            value={signUpDetails.username}
            onChange={(e) => {
              signUpChangeHandler("username", e);
            }}
          >
            <FaRegUser />
          </Input>
          <Input
            label={"E-mail"}
            placeholder="email"
            type="email"
            value={signUpDetails.email}
            onChange={(e) => {
              signUpChangeHandler("email", e);
            }}
          >
            <TfiEmail />
          </Input>
          <Input
            label={"Password"}
            placeholder="password"
            type="password"
            value={signUpDetails.password}
            onChange={(e) => {
              signUpChangeHandler("password", e);
            }}
          >
            <RiLockPasswordLine />
          </Input>
          {error && <p className="error-msg">{error}!!!</p>}
        </Form>

        <div className={`img-con ${imagePos}`}>
          <img src={backImage} className="img" />
        </div>

        <Form
          registerTitle={"RESUME JOURNEY"}
          headerTitle={"Sign In to Torch"}
          headerDesp={"Dont have an account?"}
          mode={"Sign Up."}
          currentMode={"Sign In"}
          changeMode={changeMode}
          onSubmit={handleSignIn}
        >
          <Input
            label={"E-mail"}
            placeholder="email"
            type="email"
            value={signInDetails.email}
            onChange={(e) => {
              signInChangeHandler("email", e);
            }}
          >
            <TfiEmail />
          </Input>
          <Input
            label={"Password"}
            placeholder="password"
            type="password"
            value={signInDetails.password}
            onChange={(e) => {
              signInChangeHandler("password", e);
            }}
          >
            <RiLockPasswordLine />
          </Input>
          {error && <p className="error-msg">{error}!!!</p>}
        </Form>
      </div>
    </div>
  );
}
