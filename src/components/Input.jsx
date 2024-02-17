import React from "react";

export default function Input({ label, children, ...props }) {
  return (
    <>
      <label htmlFor="username" className="formLab">
        {label}
      </label>
      <div className="inputCon">
        <input className="myinput" {...props} required />
        <p className="input-icon">{children}</p>
      </div>
    </>
  );
}
