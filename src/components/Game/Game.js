import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";
import Button from "../Button";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("playing");
  React.useEffect(() => console.info({ answer }), [answer]);
  function handleSubmitGuess(guess) {
    let nextGuesses = [...guesses, guess];
    if (guess === answer) {
      setGameState("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
    setGuesses(nextGuesses);
  }
  function reset() {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameState("playing");
  }
  return (
    <>
      {gameState !== "playing" && (
        <Button className="reset" onClick={reset}>
          RESET
        </Button>
      )}
      {gameState === "won" && <WonBanner attempts={guesses.length} />}
      {gameState === "lost" && <LostBanner answer={answer} />}
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput
        disabled={gameState !== "playing"}
        handleSubmitGuess={handleSubmitGuess}
      />
    </>
  );
}

export default Game;
