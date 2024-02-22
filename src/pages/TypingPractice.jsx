import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "./TypingPractice.scss";
import CustomKeyboard from "../components/Keyboard";

export default function TypingPractice() {
  const [layoutName, setLayoutName] = useState("default");
  const [input, setInput] = useState("");

  const commonKeyboardOptions = {
    onChange: (input) => onChange(input),
    onKeyPress: (button) => onKeyPress(button),
    theme: "simple-keyboard hg-theme-default hg-layout-default",
    physicalKeyboardHighlight: true,
    syncInstanceInputs: true,
    mergeDisplay: true,
    debug: true,
  };

  const keyboardOptions = {
    ...commonKeyboardOptions,
    layout: {
      default: [
        // "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
        "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
        "{tab} q w e r t y u i o p [ ] \\",
        "{capslock} a s d f g h j k l ; ' {enter}",
        "{shiftleft} z x c v b n m , . / {shiftright}",
        "{controlleft} {altleft} {space} {altright} {controlright}",
      ],
      shift: [
        // "{escape} {f1} {f2} {f3} {f4} {f5} {f6} {f7} {f8} {f9} {f10} {f11} {f12}",
        "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
        "{tab} Q W E R T Y U I O P { } |",
        '{capslock} A S D F G H J K L : " {enter}',
        "{shiftleft} Z X C V B N M < > ? {shiftright}",
        "{controlleft} {altleft} {space} {altright} {controlright}",
      ],
    },
    display: {
      "{escape}": "esc ⎋",
      "{tab}": "tab ⇥",
      "{backspace}": "backspace ⌫",
      "{enter}": "enter ↵",
      "{capslock}": "caps lock ⇪",
      "{shiftleft}": "shift ⇧",
      "{shiftright}": "shift ⇧",
      "{controlleft}": "ctrl ⌃",
      "{controlright}": "ctrl ⌃",
      "{altleft}": "alt ⌥",
      "{altright}": "alt ⌥",
    },
  };

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    if (
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}"
    ) {
      handleShift();
    }
  };

  const handleShift = () => {
    setLayoutName(layoutName === "default" ? "shift" : "default");
  };

  const onChangeInput = (event) => {
    let input = event.target.value;
    setInput(input);
  };

  return (
    <div className="practiceCon">
      <NavBar />
      <CustomKeyboard
        keyboardOptions={keyboardOptions}
        layoutName={layoutName}
      />
    </div>
  );
}
