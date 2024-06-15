import { range } from "../../utils";
import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ guesses }) {
  let guessList = range(NUM_OF_GUESSES_ALLOWED).map(
    (index) => guesses[index] || undefined
  );
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <Guess key={index} value={guess} />
      ))}
    </div>
  );
}

export default GuessList;
