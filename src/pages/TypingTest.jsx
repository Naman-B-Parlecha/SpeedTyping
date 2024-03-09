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
import { calculateAccuracyPercentage } from "../utils/calculation";
import CustomKeyboard from "../components/Keyboard";
// const words = faker.random.words(20);

export default function TypingTest() {
  const {
    state,
    words,
    timeRemaining,
    typed,
    errors,
    restart,
    totalTypedChars,
  } = useEngine();
  return (
    <div className="typeTestPageCon">
      <NavBar />
      <div className="textMainCon">
        <CountDownTimer time={timeRemaining} />
        <div className="relative text-3xl leading-relaxed break-all">
          <GeneratedWords words={words} />
          <UserInputTyped
            userInput={typed}
            cssClass="absolute inset-0"
            words={words}
          />
        </div>
        {state === "finish" && (
          <ResultModal
            errors={errors}
            accuracy={calculateAccuracyPercentage(errors, totalTypedChars)}
            characters={totalTypedChars}
            open={state === "finish"}
            restart={restart}
          />
        )}
        <CustomKeyboard />
      </div>
    </div>
  );
}
