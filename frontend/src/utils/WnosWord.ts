import { autorun, action, makeObservable, observable, computed } from 'mobx';

export interface IWnosWord {
  letters: Letter[];
  word: string;
  showFakes: boolean;
  scramble: () => Letter[];
  unHide: () => void;
  toggleFakes: () => void;
}

export default class WnosWord implements IWnosWord {
  public letters: Letter[] = [];
  public showFakes = false;

  constructor(lvl: Level) {
    // convert word into Type Letter
    let markedHidden: {
      [key: string]: boolean;
    } = {};
    let markedFake: {
      [key: string]: boolean;
    } = {};
    const scramble: string[] = lvl.letters.concat(lvl.fake_letters);
    this.letters = scramble.map((w: string): Letter => {
      let hidden = false;
      let fake = false;

      // check if it's a hidden letter and not already marked as hidden
      // A word can have duplicate letters, only one should be marked hidden
      if (lvl.hidden_letters.includes(w) && !(w in markedHidden)) {
        markedHidden = Object.assign({ [w]: true }, markedHidden);
        hidden = true;
      }

      // do the same with fake letters
      if (lvl.fake_letters.includes(w) && !(w in markedFake)) {
        markedFake = Object.assign({ [w]: true }, markedFake);
        fake = true;
      }

      return {
        char: w,
        hidden: hidden,
        fake: fake
      };
    });

    this.scramble();

    makeObservable(this, {
      letters: observable,
      showFakes: observable,
      scramble: action,
      unHide: action,
      toggleFakes: action,
      word: computed
    });

    autorun(this.log.bind(this));
  }

  get word(): string {
    return this.letters
      .map((l) => {
        return l.char;
      })
      .join('');
  }

  public scramble(): Letter[] {
    const cpy: Letter[] = this.letters;
    for (let i = 0; i < this.letters.length; i++) {
      const swapIndex = Math.floor(Math.random() * this.letters.length);
      const tmp = cpy[i];
      cpy[i] = cpy[swapIndex];
      cpy[swapIndex] = tmp;
    }

    this.letters = cpy;
    return cpy;
  }

  public unHide(): void {
    this.letters.forEach((l: Letter) => (l.hidden = false));
  }

  public toggleFakes() {
    this.showFakes = true;
  }

  private log() {
    if (import.meta.env.DEV) {
      console.log('Letters: ', this.letters);
      console.log('Show fakes?:', this.showFakes);
    }
  }
}
