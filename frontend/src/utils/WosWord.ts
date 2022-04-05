export interface IWosWord {
  letters: Letter[];
  word: string;
  showFakes: boolean;
  scramble: () => Letter[];
  unHide: () => void;
  toggleFakes: () => void;
}

export default class WosWord implements IWosWord {
  public letters: Letter[] = [];
  public showFakes = false;

  constructor(lvl: Level) {
    // convert word into Type Letter
    let markedHidden: {
      [key: string]: boolean;
    } = {};
    const scramble: string[] = lvl.letters.concat(lvl.fake_letters);
    this.letters = scramble.map((w: string): Letter => {
      let hidden = false;

      // TODO: might have to the same with fake letters
      // check if it's a hidden letter and not already marked as hidden
      // A word can have duplicate letters, only one should be marked hidden
      if (lvl.hidden_letters.includes(w) && !(w in markedHidden)) {
        markedHidden = Object.assign({ [w]: true }, markedHidden);
        hidden = true;
      }

      return {
        char: w,
        hidden: hidden,
        fake: lvl.fake_letters.includes(w)
      };
    });

    this.scramble();
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
}
