import { autorun, action, makeObservable, observable } from 'mobx';
import ScreenState from 'lib/ScreenState';
import GameOverScreen from 'components/Game/GameOverScreen';
import GameStartScreen from 'components/Game/GameStartScreen';
import ScoreboardScreen from 'components/Game/ScoreboardScreen';
import { FunctionComponent } from 'react';

// TODO: remove this
import { MockGame, MockLevel } from 'utils/MockData';

export interface Game {
  room: GameRoom;
  levels: Level[];
  currentLevel: Level | null;
  screenState: ScreenState;
  isGameOver: boolean;
}

class GameStore implements Game {
  public room: GameRoom = {
    id: null,
    game_room: null,
    room_code: null,
    level: null,
    theme_id: null,
    owner: null
  } as GameRoom;

  public levels: Level[] = [];
  public currentLevel: Level | null = null;
  public screenState: ScreenState = ScreenState.IDLE;
  public isGameOver = false;

  constructor() {
    makeObservable(this, {
      room: observable,
      levels: observable,
      currentLevel: observable,
      screenState: observable,
      isGameOver: observable,
      advanceScreen: action,
      nextLevel: action,
      reset: action,
      gameOver: action,
      getScreen: action,
      startGame: action
    });

    autorun(this.log.bind(this));
  }

  /**
   * Advance the game state to next stage/state this will indicate which screen
   * should be shown next
   * @param gameOver - game is over
   */
  public advanceScreen(gameOver = false) {
    if (gameOver) {
      this.screenState = ScreenState.GAME_OVER;
      return;
    }

    switch (this.screenState) {
      case ScreenState.IDLE:
        this.screenState = ScreenState.COUNT_DOWN;
        return;
      case ScreenState.COUNT_DOWN:
        this.screenState = ScreenState.ONGOING_GAME;
        return;
      case ScreenState.ONGOING_GAME:
        this.screenState = ScreenState.SCOREBOARD;
        return;
      case ScreenState.SCOREBOARD:
        this.screenState = ScreenState.RANKING;
        return;
      case ScreenState.RANKING:
        this.screenState = ScreenState.COUNT_DOWN;
        return;
      default:
        this.screenState = ScreenState.IDLE;
        return;
    }
  }

  /**
   * Set the next level
   * @param lvl - new level
   */
  public nextLevel(lvl: Level) {
    if (this.currentLevel) {
      this.levels.push(this.currentLevel);
    }
    this.currentLevel = lvl;
  }

  /**
   * Reset the game
   */
  public reset() {
    this.room = {
      id: null,
      game_room: null,
      room_code: null,
      level: null,
      theme_id: null
    } as GameRoom;

    this.levels = [];
    this.currentLevel = null;
    this.screenState = ScreenState.IDLE;
  }

  /**
   * End the game
   */
  public gameOver() {
    this.isGameOver = true;
    this.advanceScreen(this.isGameOver);
  }

  public getScreen(): FunctionComponent | null {
    switch (this.screenState) {
      case ScreenState.IDLE:
        return GameStartScreen;
      case ScreenState.COUNT_DOWN:
        return null;
      case ScreenState.ONGOING_GAME:
        return null;
      case ScreenState.SCOREBOARD:
        return ScoreboardScreen;
      case ScreenState.RANKING:
        return null;
      case ScreenState.GAME_OVER:
        return GameOverScreen;
      default:
        return null;
    }
  }

  public loadGame() {
    // TODO: load room
    this.room = MockGame;

    // TODO: load lvl
    this.currentLevel = MockLevel;
  }

  public startGame() {
    console.log('start game');
    this.screenState = ScreenState.ONGOING_GAME;
  }

  private log() {
    if (import.meta.env.DEV) {
      console.log('Room:', this.room);
      console.log('Levels:', this.levels);
      console.log('Current Level:', this.currentLevel);
      console.log('ScreenState:', ScreenState[this.screenState]);
    }
  }
}

export default GameStore;
