import React from "react";
import { shallow } from "enzyme";
import { findByTextAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaulProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};
const setup = (props = {}) => {
  const setupProps = { ...defaulProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTextAttr(wrapper, "component-guessed-words");
  expect(component.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  const expectedProps = {
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "brain", letterMatchCount: 2 }
    ]
  };

  checkProps(GuessedWords, expectedProps);
});
