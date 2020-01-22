import React, { Component } from "react";
import { connect } from "react-redux";
import { guessWord } from "../../actions";

export class UnconnectedInput extends Component {
  handleSubmit = () => {
    this.props.guessWord("hello");
  };

  render() {
    const contents = this.props.success ? (
      <div></div>
    ) : (
      <form>
        <input id="word-guess" type="text" data-test="input-box" />
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
