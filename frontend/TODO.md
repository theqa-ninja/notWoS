# To do list

- [ ] create mock data to test game

## Libraries
- [x] check out framer for cool animations
- [ ] figure out the benefits of using MobX with Reactjs

## Homepage
Should be simple and basic. Don't need a landing page. Just buttons to 
join/create a room

- [x] Create game room button
- [x] Join room with input
- [x] request to join a room -> directs to a page
- [ ] request to create a new game room

## UI
- [x] Button component
  - [x] Add color choices
  - [x] Add fun animations on hover
  - [x] Add fun animations on click
- [x] Modal component for pop-up game screens (Ex: GameOver screen)
- [ ] Add a username input dialog

## Game
- [ ] create User state
  - [ ] user is locked
  - [ ] username
  - [ ] user color
- [ ] revise GameProvider
  - [ ] use MobX
  - [ ] add eventdispatchers for state that chagnes on timer ends

### Game State

### Game Screens
Should have something that dispatches the next screen state.

#### Start Screen
- [x] Add Start game button
- [x] should shift to the countdown screen
- [ ] figure out cool enter and exit animation
- [x] should display the `Game room code`
- [ ] should only show "start game" button if not the owner and game hasn't started yet
- [ ] "start game" btn should send to backend that the game is starting to sync all clients

#### Countdown
- [x] figure out what kind of animations to use
- [ ] should be skipped if user joins an ongoing game

#### WNOS Screen
- [ ] on new chat message, send 'on_guess' request to backend
- [ ] if new guess correct, show in guess-board
- [ ] State of game
  - [ ] timer, guess-board and wnos-board, and chat should share state
  - [ ] after a correct guess, user should be locked until next timer-lock (needs user state)
  - [ ] after a certain amount of time, all hiddens and fakes should be shown AND all hidden guesses are shown
  - [ ] implement auto scramble after `x` amount of seconds
  - [ ] scrambling should increase (become faster) as the level timer goes down.

#### End Level 

#### Game Over
