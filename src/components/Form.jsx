import React from "react";

export default function Form({
  children,
  registerTitle,
  headerTitle,
  headerDesp,
  mode,
  currentMode,
  changeMode,
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
        <input type="submit" value={currentMode} className="submit" />
      </form>
      <p className="oneliner">
        Accelerate your typing, accelerate your success. By using our site,
        you're ready to speed up your typing skills.
      </p>
    </div>
  );
}
