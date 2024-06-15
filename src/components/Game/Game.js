import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("playing");
  function handleSubmitGuess(guess) {
    let nextGuesses = [...guesses, guess];
    if(guess === answer) {
      setGameState("won");
    } else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
    setGuesses(nextGuesses);
  }
  return (
    <>
      {gameState !== "playing" && <Banner gameState={gameState} answer={answer} attempts={guesses.length}/>}
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput disabled={gameState !== "playing"} handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
