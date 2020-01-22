import React from "react";
import { shallow } from "enzyme";
import App, { UnconnectedApp } from "./App";

import { findByTextAttr, storeFactory } from "../test/testUtils";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

test("has success state as props", () => {
  const success = true;
  const wrapper = setup({ success });
  const component = findByTextAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});

test("has secretWord state as props", () => {
  const secretWord = "party";
  const wrapper = setup({ secretWord });
  const secretWordProps = wrapper.instance().props.secretWord;
  expect(secretWordProps).toBe(secretWord);
});

test("has guessedWords state as props", () => {
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "brain", letterMatchCount: 2 },
    { guessedWord: "party", letterMatchCount: 5 }
  ];
  const wrapper = setup({ guessedWords });
  const guessedWordsProps = wrapper.instance().props.guessedWords;
  expect(guessedWordsProps).toBe(guessedWords);
});

test("has success state as props", () => {
  const wrapper = setup();
  const getSecretWord = wrapper.instance().props.getSecretWord;
  expect(getSecretWord).toBeInstanceOf(Function);
});

test("getSecretWord runs on App mount", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: true,
    guessedWords: []
  };

  const wrapper = shallow(<UnconnectedApp {...props} />);
  wrapper.instance().componentDidMount();

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
