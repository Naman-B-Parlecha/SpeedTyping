import React from "react";

export default function CountDownTimer({ time }) {
  console.log(time);
  return (
    <div className="w-full">
      <h2 className="text-purple-400 font-medium">Time Remaining : {time}</h2>
    </div>
  );
}
