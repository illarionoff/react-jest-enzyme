import { storeFactory } from "../test/testUtils";
import { guessWord } from "./actions";

describe("guessWord action dispatcher", () => {
  const secretWord = "party";
  const unsuccessfullGuess = "tray";

  describe("no guessed words", () => {
    let store;
    const initialState = { secretWord };
    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state correctly for unsuccessfull guess", () => {
      store.dispatch(guessWord(unsuccessfullGuess));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [
          {
            guessedWord: unsuccessfullGuess,
            letterMatchCount: 4
          }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });

    test("update state correctly for successfull guess", () => {
      store.dispatch(guessWord(secretWord));
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      const newState = store.getState();
      expect(newState).toEqual(expectedState);
    });
  });

  describe("some guessed words", () => {
    let store;
    const guessedWords = [
      {
        guessedWord: "Hello",
        letterMatchCount: 1
      }
    ];
    const initialState = {
      guessedWords,
      secretWord
    };

    beforeEach(() => {
      store = storeFactory(initialState);
    });
    test("update state correctly for unsuccessfull guess", () => {
      store.dispatch(guessWord(unsuccessfullGuess));
      const newState = store.getState();

      const expectedState = {
        secretWord,
        success: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfullGuess,
            letterMatchCount: 4
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });

    test("update state correctly for successfull guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedState = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: secretWord,
            letterMatchCount: 5
          }
        ]
      };
      expect(newState).toEqual(expectedState);
    });
  });
});
