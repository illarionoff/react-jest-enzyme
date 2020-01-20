export function getLettersMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessesLetterSet = new Set(guessedWord.split(""));

  return [...secretLetterSet].filter(letter => guessesLetterSet.has(letter))
    .length;
}
