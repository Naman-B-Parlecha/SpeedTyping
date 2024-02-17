import React from "react";

export default function Form({
  children,
  registerTitle,
  headerTitle,
  headerDesp,
  mode,
  currentMode,
  changeMode,
  onSubmit,
}) {
  return (
    <div className="signUp">
      <p className="registerTitle">{registerTitle}</p>
      <h1 className="signUpHeader">{headerTitle}</h1>
      <p className="headerDesp">
        {headerDesp}
        <span className="headerspan">
          <button className="spanButton" onClick={changeMode}>
            {mode}
          </button>
        </span>
      </p>
      <form>
        {children}
        <button type="button" className="submit" onClick={onSubmit}>
          {currentMode}
        </button>
      </form>
      <p className="oneliner">
        Accelerate your typing with our dynamic platform featuring races and
        practice sessions for skill enhancement.
      </p>
    </div>
  );
}
