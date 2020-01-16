import React from "react";
import { shallow } from "enzyme";
import App from "./App";

import { findByTextAttr } from "../test/testUtils";

test("renders without error", () => {
  const wrapper = shallow(<App />);
  const component = findByTextAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
