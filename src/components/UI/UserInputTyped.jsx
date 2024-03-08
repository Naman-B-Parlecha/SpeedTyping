import React from "react";
import Caret from "./Caret";

export default function UserInputTyped({ userInput, cssClass }) {
  const typedCharacters = userInput.split("");
  return (
    <div className={cssClass}>
      {typedCharacters.map((char, index) => {
        return (
          <span key={`${char}_${index}`} className="text-amber-300">
            {char}
          </span>
        );
      })}
      <Caret />
    </div>
  );
}
