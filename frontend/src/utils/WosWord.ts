export interface IWosWord {
  original: string;
  scrambled: string;
  hiddens: string[];
  fakes: string[];
}

export default class WosWord implements IWosWord {
  public original = '';
  public scrambled = '';
  public hiddens: string[] = [];
  public fakes: string[] = [];

  constructor(word: string) {
    this.original = word;
  }

  // get scrambled() {
  //   return this.scrambled.split('');
  // }
  // TODO: port word scrambling into here
}
