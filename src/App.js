import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <div className="App">
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "brain", letterMatchCount: 2 },
          { guessedWord: "party", letterMatchCount: 5 }
        ]}
      ></GuessedWords>
    </div>
  );
}

export default App;
