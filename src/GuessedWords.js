import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  return (
    <div data-test="component-guessed-words">
      {props.guessedWords.length === 0 ? (
        <p data-test="guess-message">Guess a word</p>
      ) : (
        <div data-test="guessed-words">
          <ul>
            {props.guessedWords.map((word, i) => (
              <li key={i} data-test="guessed-word">
                {word.guessedWord} {word.letterMatchCount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
