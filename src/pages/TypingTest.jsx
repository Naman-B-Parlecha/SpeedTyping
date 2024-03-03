import React from "react";

import NavBar from "../components/NavBar";
import "./Typingtest.scss";

export default function TypingTest() {

  return (
    <div className="typeTestPageCon">
      <NavBar />
      <h1 className='testheader'>Test Page</h1>
      <p className='testmessage'>Under Construction.....</p>
      {/* <button onClick={handleSignOut} className="but">SignOut</button> */}
    </div>
  );
}
