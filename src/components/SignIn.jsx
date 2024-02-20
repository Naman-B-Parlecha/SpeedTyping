import React from "react";
import Form from "./Form";
import Input from "./Input";

import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function SignIn({
  changeMode,
  handleSignIn,
  signInChangeHandler,
  signInDetails,
  signInError,
  error,
}) {
  return (
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
      {signInError.email !== "" && (
        <p className="error-msg">{signInError.email}</p>
      )}
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
      {signInError.password !== "" && (
        <p className="error-msg">{signInError.password}</p>
      )}
      {error && <p className="error-msg">{error}!!!</p>}
    </Form>
  );
}
