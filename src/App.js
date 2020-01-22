import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Congrats from "./components/congrats/Congrats";
import GuessedWords from "./components/guessedWords/GuessedWords";
import Input from "./components/input/Input";
import { getSecretWord } from "./actions";

class App extends Component {
  render() {
    const { success, guessedWords, secretWord, getSecretWord } = this.props;

    return (
      <div data-test="component-app" className="App">
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords}></GuessedWords>
      </div>
    );
  }
}

const mapStateToProps = ({ success, guessedWords, secretWord }) => {
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
