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

test("does not throw warning with expected props", () => {
  const expectedProps = {
    guessedWords: [
      { guessedWord: "train", letterMatchCount: 3 },
      { guessedWord: "brain", letterMatchCount: 2 }
    ]
  };

  checkProps(GuessedWords, expectedProps);
});

describe("if no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTextAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const component = findByTextAttr(wrapper, "guess-message");
    expect(component.text().length).not.toBe(0);
  });
});

describe("if words are guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "brain", letterMatchCount: 2 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  beforeEach(() => {
    wrapper = setup({
      guessedWords
    });
  });

  test("renders without error", () => {
    const component = findByTextAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders 'Guessed words' section", () => {
    const section = findByTextAttr(wrapper, "guessed-words");
    expect(section.length).toBe(1);
  });

  test("renders correct number of guessed words", () => {
    const section = findByTextAttr(wrapper, "guessed-word");
    expect(section.length).toBe(guessedWords.length);
  });
});
