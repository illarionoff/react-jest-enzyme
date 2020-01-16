import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test("return default initial state of 'false' when no action passed", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true when receive action with type 'CORRECT_GUESS'", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
