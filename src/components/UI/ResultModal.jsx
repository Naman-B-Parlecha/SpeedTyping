import React, { useEffect, useRef } from "react";
import { Formatter } from "../../utils/accuracyFormatter.jsx";
import RestartButton from "./RestartButton.jsx";
import "./ResultModal.scss";
import { createPortal } from "react-dom";
import { calculateWpm } from "../../utils/calculation.jsx";
export default function ResultModal({
  errors,
  accuracy,
  characters,
  open,
  restart,
}) {
  const resultRef = useRef();
  useEffect(()=>{
    if(open){
      resultRef.current.showModal();
    }
  },[open]);
  return createPortal(
    <>
      {open && <div className="backdropCon" />}
      <dialog className="resultModalCon" ref={resultRef} onClose={restart}>
        <h1 className="resultModalHead">Result Modal</h1>
        <div className="row">
          <div className="col">
            <p>Speed : </p>
            <p>{calculateWpm(characters, errors, 30)} wpm</p>
          </div>
          <div className="col">
            <p>Accuracy : </p>
            <p>{Formatter(accuracy)}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="error">Errors : </p>
            <p className="error">{errors}</p>
          </div>
          <div className="col">
            <p>Characters : </p>
            <p>{characters}</p>
          </div>
        </div>
        <div className="restartBtnCon">
          <RestartButton handleRestart={restart} />
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
}
