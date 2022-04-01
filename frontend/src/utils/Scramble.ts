/**
 * Generates and returns a random alphabet letter
 * @returns a alphabet letter from a-z
 */
export function generateRandomLetter(): string {
  const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
  return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
}

/**
 * Returns a scrambled array of characters
 * @param word - word to scramble split into an array
 * @returns string[]
 */
export function scrambleWord(word: string[]): string[] {
  const cpy: string[] = word;
  for (let i = 0; i < word.length; i++) {
    const swapIndex = Math.floor(Math.random() * word.length);
    const tmp = cpy[i];
    cpy[i] = cpy[swapIndex];
    cpy[swapIndex] = tmp;
  }

  return cpy;
}
