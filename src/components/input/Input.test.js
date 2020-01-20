import React from "react";
import { shallow } from "enzyme";
import { findByTextAttr, storeFactory } from "../../../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

setup();

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
    test("renders without error", () => {});
    test("does not renders input box", () => {});
    test("does not renders submit button", () => {});
  });
});

describe("update state", () => {});
