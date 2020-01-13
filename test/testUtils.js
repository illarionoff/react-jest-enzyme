export const findByTextAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
