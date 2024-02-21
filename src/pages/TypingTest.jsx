import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "./Typingtest.scss";
import "../index.css";
import NavBar from "../components/NavBar";
const TypingSpeed = () => {
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
    <div className="testCon">
      <NavBar />
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <div className={"keyboardContainer"}>
        <Keyboard
          baseClass={"simple-keyboard-main"}
          layoutName={layoutName}
          {...keyboardOptions}
          buttonTheme={[
            {
              buttons:
                "` 1 ~ ! ) - + {backspace} 0 _ = {tab} Q q P p { [ ] } \\ | {capslock} A a : ; \" ' {enter} {shiftleft} Z z X x / ? {shiftright} {controlleft} {altleft} {altright} {controlright}",
              class: "color1",
            },
            { buttons: "2 @ 9 ( W w O o S s L l C c > .", class: "color2" },
            { buttons: "3 # 8 * E e D d  , < K k I i V v", class: "color3" },
            { buttons: "4 $ 5 % R r T t F f G g  B b", class: "color4" },
            { buttons: "6 ^ 7 & Y y U u H h J j N n M m", class: "color5" },
            {buttons: " {space} ", class: "color6"},
          ]}
        />
      </div>
    </div>
  );
};

export default TypingSpeed;
