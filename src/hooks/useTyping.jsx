import { useCallback, useEffect, useRef, useState } from "react";

function isKeyBoardAllowed(code) {
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === "Backspace" ||
    code === "Space"
  );
}

// enabled is prop for saying if user started the typing
//cursor -> is for current index begin typed
//typed -> stores chars already typed
//totalTypeRef -> is for total amount of char typed
//            this is to know at end how many error were typed..
export function useTyping(enabled ) {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState("");
  const totalTypeRef = useRef(0);

  const keyDownHandler = useCallback(
    ({ key, code }) => {
      console.log("here: key: " + key + " code: " + code);
      if (!enabled || !isKeyBoardAllowed(code)) {
        return;
      }
      switch (key) {
        case "Backspace":
          setTyped((prev) => prev.slice(0, -1));
          setCursor((prev) => prev - 1);
          totalTypeRef.current -= 1;
          break;
        default:
          setTyped((prev) => prev.concat(key));
          setCursor((prev) => prev + 1);
          totalTypeRef.current += 1;
          break;
      }
    },
    [cursor, enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped("");
    setCursor(0);
  }, []);

  const resetTotalTyped = useCallback(() => {
    totalTypeRef.current = 0;
  }, []);
  useEffect(() => {
    console.log("hi");
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  return {
    typed,
    cursor,
    totalTypedChars: totalTypeRef.current,
    clearTyped,
    resetTotalTyped,
  };
}
