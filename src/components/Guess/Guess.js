import { range } from "../../utils";
import React from "react";

function Guess({ value }) {
  return (
    <p class="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {value ? value[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
