import React from "react";
import { checkGuess } from "../../game-helpers";

const KEYS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

function FeedbackKeyboard({ answer, guesses }) {
  const keymap = {};
  const correctCountOfKey = Object.fromEntries(KEYS.flat().map((letter) => [letter, 0]));
  const totalCountOfKey = Object.fromEntries(KEYS.flat().map((letter) => [letter, 0]));
  const feedback = guesses.map((guess) => checkGuess(guess, answer));
  for (let result of feedback) {
    let letters = result.map((r) => r.letter)
    let correctCountOfKeyFromGuess = Object.fromEntries(letters.map((letter) => [letter, 0]));
    let misplacedCountOfKeyFromGuess = Object.fromEntries(letters.map((letter) => [letter, 0]));
    for (let { letter, status } of result) {
      switch (status) {
        case "correct":
          correctCountOfKeyFromGuess[letter]++;
          break;
        case "misplaced":
          misplacedCountOfKeyFromGuess[letter]++;
          break;
        default:
          break;
      }
    }
    for (let letter of letters) {
      totalCountOfKey[letter] = Math.max(totalCountOfKey[letter], correctCountOfKeyFromGuess[letter] + misplacedCountOfKeyFromGuess[letter]);
      correctCountOfKey[letter] = Math.max(correctCountOfKey[letter], correctCountOfKeyFromGuess[letter]);
    }
  }
  let flatLetters = new Set(guesses.join(""));
  for(let key of KEYS.flat()) {
    if (!flatLetters.has(key)) {
      keymap[key] = "unused";
      continue;
    }
    if (totalCountOfKey[key] > correctCountOfKey[key]) {
      keymap[key] = "misplaced";
      continue;
    }
    if (correctCountOfKey[key] > 0) {
      keymap[key] = "correct";
      continue;
    }
    keymap[key] = "incorrect";
  }
  return (
    <Keyboard
      keys={KEYS.map((row) =>
        row.map((key) => ({
          letter: key,
          status: keymap[key],
        }))
      )}
    />
  );
}

function Keyboard({ keys }) {
  return (
    <div className="keyboard">
      {keys.map((row, i) => (
        <div key={i} className="keyrow">
          {row.map((key, j) => (
            <Key key={j} {...key} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Key({
  letter,
  status = "unused" /* correct | misplaced | unused | incorrect*/,
}) {
  return <div className={`key ${status}`}>{letter}</div>;
}

export default FeedbackKeyboard;
