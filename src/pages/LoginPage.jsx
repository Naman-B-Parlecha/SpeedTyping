import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import "./Loginpage.scss";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import backImage from "../assets/backImage.jpg";

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
  const [signUpError, setSignUpError] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState({
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
    setSignInError({ email: "", password: "" });
    setSignUpError({ username: "", email: "", password: "" });
    setError("");
    console.log(mode, imagePos);
  }

  function signUpChangeHandler(identifier, event) {
    setSignUpError({ username: "", email: "", password: "" });
    setSignUpDetails((prev) => ({ ...prev, [identifier]: event.target.value }));
  }
  function signInChangeHandler(identifier, event) {
    setSignInError({ email: "", password: "" });
    setSignInDetails((prev) => ({ ...prev, [identifier]: event.target.value }));
  }

  async function handleSignUp(e) {
    e.preventDefault();
    let isError = false;
    try {
      if (signUpDetails.username === "") {
        setSignUpError((prev) => ({
          ...prev,
          username: "Kindly fill the username field.",
        }));
        isError = true;
      }
      if (!signUpDetails.email.includes("@")) {
        setSignUpError((prev) => ({
          ...prev,
          email: "Kindly fill the email field correctly.",
        }));
        isError = true;
      }
      if (signUpDetails.password.length < 6) {
        setSignUpError((prev) => ({
          ...prev,
          password: "Password should be atleast 6 characters long.",
        }));
        isError = true;
      }

      if (isError) return;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpDetails.email,
        signUpDetails.password
      );

      console.log(userCredential);
      let user = userCredential.user;
      await updateProfile(user, { displayName: signUpDetails.username });
      console.log("user", user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userPass", signUpDetails.password);
      localStorage.setItem("token", user.accessToken);
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
    let isError = false;
    try {
      if (!signInDetails.email.includes("@")) {
        setSignInError((prev) => ({
          ...prev,
          email: "Kindly fill the email field correctly.",
        }));
        isError = true;
      }
      if (signInDetails.password.length < 6) {
        setSignInError((prev) => ({
          ...prev,
          password: "Password should be atleast 6 characters long.",
        }));
        isError = true;
      }
      if (isError) return;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        signInDetails.email,
        signInDetails.password
      );
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("userPass", JSON.stringify(signInDetails.password));
      localStorage.setItem("token", user.accessToken);
      console.log("user", user);

      navigate("/");
      setSignInDetails((prev) => ({ ...prev, email: "", password: "" }));
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  }
  return (
    <div className="loginpagecon">
      <div className="secondaryLogin">
        <SignUp
          changeMode={changeMode}
          handleSignUp={handleSignUp}
          signUpDetails={signUpDetails}
          signUpError={signUpError}
          error={error}
          signUpChangeHandler={signUpChangeHandler}
        />
        <div className={`img-con ${imagePos}`}>
          <img src={backImage} className="img" />
        </div>
        <SignIn
          changeMode={changeMode}
          handleSignIn={handleSignIn}
          signInDetails={signInDetails}
          signInError={signInError}
          error={error}
          signInChangeHandler={signInChangeHandler}
        />
      </div>
    </div>
  );
}
