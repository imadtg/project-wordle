import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [guess, setGuess] = React.useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    handleSubmitGuess(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input"> Enter Guess </label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      ></input>
    </form>
  );
}

export default GuessInput;
