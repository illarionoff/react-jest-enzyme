import { getLettersMatchCount } from ".";

describe("getLettersMatchCount", () => {
  const secretWord = "party";
  test("returns correct count when there are no matching letter", () => {
    const letterMatchCount = getLettersMatchCount("bones", secretWord);
    expect(letterMatchCount).toBe(0);
  });

  test("returns correct count when three  matching letters", () => {
    const letterMatchCount = getLettersMatchCount("train", secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test("returns correct count when there are duplicates", () => {
    const letterMatchCount = getLettersMatchCount("parka", secretWord);
    expect(letterMatchCount).toBe(3);
  });
});
