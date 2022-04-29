import { action, autorun, computed, makeObservable, observable } from 'mobx';

interface IWnosGuess {
  letters: Array<string>;
  player: string | null;
  hidden: boolean;
}

/*NOTE:
 * 3 states:
 *   - revelaed
 *   - hidden
 *   - not revealed (not guessed)
 */

export default class WnosGuess implements IWnosGuess {
  private locked = false;
  private guessed = false;
  private word = '';
  public hidden = false;
  public letters: Array<string> = [];
  public player: string | null = null;

  constructor(
    word: string,
    player: string | null = null,
    hidden = false,
    locked = false
  ) {
    if (!word.length) {
      return;
    }

    this.word = word;
    this.player = player;
    if (player) {
      this.guessed = true;
    }
    this.hidden = hidden;
    this.locked = locked;
    this.updateLetters();

    makeObservable(this, {
      player: observable,
      letters: observable,
      hidden: observable,
      length: computed,
      lockPlayer: action,
      unlockPlayer: action,
      showWord: action,
      reveal: action
    });

    autorun(this.log.bind(this));
  }

  get length() {
    return this.letters.length;
  }

  public lockPlayer() {
    this.locked = true;
  }

  public unlockPlayer() {
    this.locked = false;
  }

  public showWord() {
    this.hidden = false;
    this.updateLetters();
  }

  public reveal() {
    this.guessed = true;
    this.updateLetters();
  }

  /**
   * When the word is hidden, the letters will show '?'. If the word has not
   * been guessed, then the letters will show an empty space. Otherwise,
   * it will show the letters of the word
   */
  private updateLetters() {
    if (this.hidden) {
      this.letters = Array(this.word.length).fill('?');
    } else if (this.guessed) {
      this.letters = this.word.split('');
    } else {
      this.letters = Array(this.word.length).fill('');
    }
  }

  private log() {
    if (import.meta.env.DEV) {
      console.log('word:', this.word);
      console.log('letters:', this.letters);
      console.log('player:', this.player);
      console.log('hidden?:', this.hidden);
      console.log('locked?:', this.locked);
    }
  }
}
