import checkPropTypes from "check-prop-types";

export const findByTextAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (comp, confProps) => {
  const propError = checkPropTypes(
    comp.propTypes,
    confProps,
    "prop",
    comp.name
  );
  expect(propError).toBeUndefined();
};
