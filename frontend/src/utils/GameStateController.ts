export default class GameStateController implements IGameStateController {
  public gameRoom: GameRoom | null = null;
  public levels: Array<Level> = [];
  public currentLevel: number | null = null;

  private _state: GameState | null = null;

  constructor() {
    this._state = GameState.IDLE;
  }
}
