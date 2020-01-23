import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    const guessedWord = this.props.guessWord(this.inputBox.current.value);
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
    this.inputBox.current.value = "";
  };

  render() {
    const contents = this.props.success ? (
      <div></div>
    ) : (
      <form>
        <input
          data-test="input-box"
          ref={this.inputBox}
          id="word-guess"
          type="text"
        />
        <button
          data-test="button-submit"
          type="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
