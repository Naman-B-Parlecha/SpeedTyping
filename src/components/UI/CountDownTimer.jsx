import React from "react";

export default function CountDownTimer({ time }) {
  console.log(time);
  return (
    <>
      <h2 className="text-purple-300 font-medium">Time Remaining : {time}</h2>
    </>
  );
}
