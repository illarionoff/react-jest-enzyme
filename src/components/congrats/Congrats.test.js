import React from "react";
import { shallow } from "enzyme";

import { findByTextAttr, checkProps } from "../../../test/testUtils";
import Congrats from "./Congrats";

const defaulProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaulProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup({ success: false });
  const component = findByTextAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

test("renders no text wwhen  success is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTextAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

test("renders non-enpty congrats message when success is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTextAttr(wrapper, "congrats-message");
  expect(component.text().length).not.toBe(0);
});

test("does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
