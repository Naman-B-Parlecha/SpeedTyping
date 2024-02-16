import React, { useState } from "react";
import "./Loginpage.scss";

import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

import Input from "../components/Input";
import Form from "../components/Form";

import backImage from "../assets/backImage.jpg";

export default function LoginPage() {
  const [mode, setMode] = useState("Sign Up");
  const [imagePos, setImagePos] = useState("position-right");

  function changeMode() {
    if (mode === "Sign Up") {
      setMode("Sign In");
      setImagePos("position-left");
    } else {
      setMode("Sign Up");
      setImagePos("position-right");
    }
    console.log(mode, imagePos);
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
        >
          <Input label={"Username"} placeholder="username" type="text">
            <FaRegUser />
          </Input>
          <Input label={"E-mail"} placeholder="email" type="email">
            <TfiEmail />
          </Input>
          <Input label={"Password"} placeholder="password" type="password">
            <RiLockPasswordLine />
          </Input>
        </Form>

        <div className={`img-con ${imagePos}`}>
          <img src={backImage} className="img"/>
        </div>

        <Form
          registerTitle={"RESUME JOURNEY"}
          headerTitle={"Sign In to SpeedTpe"}
          headerDesp={"Dont have an account?"}
          mode={"Sign Up."}
          currentMode={"Sign In"}
          changeMode={changeMode}
        >
          <Input label={"E-mail"} placeholder="email" type="email">
            <TfiEmail />
          </Input>
          <Input label={"Password"} placeholder="password" type="password">
            <RiLockPasswordLine />
          </Input>
        </Form>
      </div>
    </div>
  );
}
