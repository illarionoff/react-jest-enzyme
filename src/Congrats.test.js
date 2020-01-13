import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTextAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
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
