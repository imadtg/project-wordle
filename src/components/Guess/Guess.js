import { range } from "../../utils";
import React from "react";

function Guess({ value }) {
  if (!value) {
    value = range(5).map(() => "");
  } else {
    value = value.split("");
  }
  return (
    <p class="guess">
      {value.map((char, index) => (
        <span key={index} className="cell">
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
