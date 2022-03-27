/**
 * Generates and returns a random alphabet letter
 * @returns a alphabet letter from a-z
 */
export function generateRandomLetter(): string {
  const CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
  return CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));
}

/**
 *  Returns a scrambled a word
 * @param word word to scramble
 * @returns string
 */
export function scrambleWord(word: string): string {
  const cpy: string[] = word.split('');
  for (let i = 0; i < word.length; i++) {
    const swapIndex = Math.floor(Math.random() * word.length);
    const tmp = cpy[i];
    cpy[i] = cpy[swapIndex];
    cpy[swapIndex] = tmp;
  }

  return cpy.join('');
}
