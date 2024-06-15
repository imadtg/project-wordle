import React from "react";

function GuessInput({ handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState([]);
  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess: tentativeGuess });
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input"> Enter Guess </label>
      <input
        id="guess-input"
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      ></input>
    </form>
  );
}

export default GuessInput;
