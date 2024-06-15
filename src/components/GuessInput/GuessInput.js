import React from "react";

function GuessInput({ handleSubmitGuess, disabled}) {
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
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        disabled={disabled}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      ></input>
    </form>
  );
}

export default GuessInput;
