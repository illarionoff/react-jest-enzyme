import React from "react";
import { shallow } from "enzyme";
import { findByTextAttr, checkProps } from "../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaulProps = {};

const setup = (props = {}) => {
  const setupProps = { ...defaulProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTextAttr(wrapper, "component-guessed-words");
  expect(component.length).toBe(1);
});
