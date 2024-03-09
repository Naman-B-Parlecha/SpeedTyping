import React, { useRef } from "react";
import { FaRedoAlt } from "react-icons/fa";

export default function RestartButton({ handleRestart }) {
  const buttonRef = useRef();
  function handleClick() {
    buttonRef.current.blur();
    handleRestart();
  }
  return (
    <button ref={buttonRef} onClick={handleClick} className="w-fit p-4 border-none outline-none">
      <FaRedoAlt className="text-black w-6 h-6" />
    </button>
  );
}
