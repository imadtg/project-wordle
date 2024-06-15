import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import React from "react";

function Cell({ letter, status }) {
  let className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  let feedback = checkGuess(value, answer);
  return (
    <p class="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={value ? value[num] : undefined}
          status={feedback ? feedback[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
