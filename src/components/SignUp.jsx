import React from "react";
import Form from "./Form";
import Input from "./Input";

import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignUp({
  changeMode,
  handleSignUp,
  signUpDetails,
  signUpError,
  error,
  signUpChangeHandler,
}) {
  return (
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
      {signUpError.username !== "" && (
        <p className="error-msg">{signUpError.username}</p>
      )}
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
      {signUpError.email !== "" && (
        <p className="error-msg">{signUpError.email}</p>
      )}
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
      {signUpError.password !== "" && (
        <p className="error-msg">{signUpError.password}</p>
      )}
      {error && <p className="error-msg">{error}!!!</p>}
    </Form>
  );
}
