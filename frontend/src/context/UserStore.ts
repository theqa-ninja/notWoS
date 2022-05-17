import Color from 'utils/Colors';
import { autorun, action, makeObservable, observable } from 'mobx';

export interface User {
  username: string;
  guest: boolean;
  id: UUID | null;
}

interface IUserStore {
  user: User;
  color: Color;
  prevGuess: string;
}

class UserStore implements IUserStore {
  public user: User = {
    username: '',
    guest: false,
    id: null
  };
  public color = Color.lavender;
  public prevGuess = '';

  constructor() {
    makeObservable(this, {
      user: observable,
      color: observable,
      prevGuess: observable,
      setUsername: action
    });

    autorun(this.logUser.bind(this));
  }

  public setUsername(name: string) {
    this.user.username = name;
  }

  private logUser() {
    if (import.meta.env.DEV) {
      console.log('User:', this.user);
      console.log('Color:', this.color);
    }
  }
}

export default UserStore;
