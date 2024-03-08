import React from "react";
import { faker } from "@faker-js/faker";

import NavBar from "../components/NavBar";
import "./Typingtest.scss";

import GeneratedWords from "../components/UI/GeneratedWords";
import CountDownTimer from "../components/UI/CountDownTimer";
import RestartButton from "../components/UI/RestartButton";
import ResultModal from "../components/UI/ResultModal";
import UserInputTyped from "../components/UI/UserInputTyped";
import { useEngine } from "../hooks/useEngine";
// const words = faker.random.words(20);

export default function TypingTest() {
  const { state, words, timeRemaining } = useEngine();
  return (
    <div className="typeTestPageCon">
      <NavBar />
      {/* <h1 className='testheader'>Test Page</h1>
      <p className='testmessage'>Under Construction.....</p> */}
      {/* <button onClick={handleSignOut} className="but">SignOut</button> */}
      <div className="textMainCon">
        <CountDownTimer time={timeRemaining} />
        <div className="relative text-3xl leading-relaxed break-all">
          <GeneratedWords words={words} />
          <UserInputTyped
            userInput={"Naman B Parlecha"}
            cssClass="absolute inset-0"
          />
        </div>
        <RestartButton handleRestart={() => {}} />
        <ResultModal />
      </div>
    </div>
  );
}
