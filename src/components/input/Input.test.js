import React from "react";
import { shallow } from "enzyme";
import { findByTextAttr, storeFactory } from "../../../test/testUtils";
import Input, { UnconnectedInput } from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      const component = findByTextAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("renders input box", () => {
      const inputBox = findByTextAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("renders submit button", () => {
      const submitButton = findByTextAttr(wrapper, "button-submit");
      expect(submitButton.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      let component = findByTextAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not renders input box", () => {
      let inputBox = findByTextAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not renders submit button", () => {
      const submitButton = findByTextAttr(wrapper, "button-submit");
      expect(submitButton.length).toBe(0);
    });
  });
});

describe("redux props", () => {
  test("has success state as props", () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });

  test("has guessWord action as a function prop", () => {
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord;
    expect(guessWordProp).toBeInstanceOf(Function);
  });
});

describe("guessWord action creator call", () => {
  let guessWordMock;
  let wrapper;
  const guessedWord = "train";

  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock,
      success: false
    };
    wrapper = shallow(<UnconnectedInput {...props} />);
    wrapper.instance().inputBox.current = { value: guessedWord };
    const submitButton = findByTextAttr(wrapper, "button-submit");
    submitButton.simulate("click", { preventDefault() {} });
  });

  test("guessWord called on button click", () => {
    const guessWordMockCallCount = guessWordMock.mock.calls.length;
    expect(guessWordMockCallCount).toBe(1);
  });

  test("guessWord is called with input value argument", () => {
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord);
  });

  test("clears input after calling submit action", () => {
    expect(wrapper.instance().inputBox.current.value).toBe("");
  });
});
