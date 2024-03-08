import React from "react";
import Caret from "./Caret";
import classNames from "classnames";

export default function UserInputTyped({ userInput, cssClass, words }) {
  const typedCharacters = userInput.split("");
  return (
    <div className={cssClass}>
      {typedCharacters.map((char, index) => {
        const actual = char;
        const expected = words[index];
        const whiteSpace = words[index] === " ";
        return (
          <span
            key={`${char}_${index}`}
            className={classNames({
              "text-purple-500": actual === expected && !whiteSpace,
              "text-red-500": actual !== expected && !whiteSpace,
              "underline text-red-900": whiteSpace && actual !== expected,
            })}
          >
            {expected}
          </span>
        );
      })}
      <Caret />
    </div>
  );
}
