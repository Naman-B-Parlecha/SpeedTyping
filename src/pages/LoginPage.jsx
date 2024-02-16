import React from "react";
import "./Loginpage.scss";
import Input from "../components/Input";

import { FaRegUser } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordLine } from "react-icons/ri";

export default function LoginPage() {
  return (
    <div className="loginpagecon">
      <div className="secondaryLogin">
        <div className="signUp">
          <p className="registerTitle">REGISTER NOW</p>
          <h1 className="signUpHeader">Sign Up For Free.</h1>
          <p className="headerDesp">
            Already have an account?{" "}
            <span className="headerspan">
              <button className="spanButton">Sign In.</button>
            </span>
          </p>
          <form>
            <Input label={"Username"} placeholder="username" type="text">
              <FaRegUser />
            </Input>
            <Input label={"E-mail"} placeholder="email" type="email">
              <TfiEmail />
            </Input>
            <Input label={"Password"} placeholder="password" type="password">
              <RiLockPasswordLine />
            </Input>
            <input type="submit" value="Submit " className="submit" />
          </form>
          <p className="oneliner">
            Accelerate your typing, accelerate your success. By using our site,
            you're ready to speed up your typing skills.
          </p>
        </div>

        <div className="img-con">x</div>
        <div className="signIn">Login</div>
      </div>
    </div>
  );
}
