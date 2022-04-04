# notWoS

models

guessers
- uuid
- displayname
- email? (if not filled in, temporary user?)
- password (obviously useless right now)

gameroom
- uuid
- room_name
- room_code
- current level
- tag_id (tag.uuid)
- creator_id (guessers.uuid)

levels
- gameroom (gameroom.uuid)
- starting_word (the longest word in the room)
- letters (array of letters)
- valid_words (array of words)
- fake_letters (integer)
- hidden_letters (integer)
- min_length (integer)
- max_length (integer)
- dictionary (dictionary.uuid)
- is_active (boolean)
- tag_id (tag.uuid)

guesses
- guesser_id (guesser.uuid)
- gameroom_id (gameroom.uuid)
- level_id (level.uuid)
- guess (string)
- is_valid (boolean)
- was_locked (boolean)


tag
- uuid
- name (string)

imported_files
- uuid
- filename (filename string)
- tag_id (the theme we point it to per filename)

Socket Messages:

- Client (frontend)
    - on “newGuess”
        - a new guess was made, add guess to chat message
        - update game state if applicable
    - on “updateGameState”
        - updates the local game state
    - on “createGameRoom”
        - start rendering the game and loading the level
    - on “connect” - just the basic connection to server
    - on “disconnect” - basic disconnect from server
- Server
    - on “joinRoom”
        - if the room doesn’t exist, create one → emits “createGameRoom” with gameroom as payload
        - if room already exist, add user to room/user list?
    - on “createGuess”
        - a user makes a guess, if correct guess → emit “updateGameState” and emit “newGuess”? one for updating game state and the other for sending the guess to chat
        - if incorrect guess → emit “newGuess”
        - We might not need to emit “updateGameState” or emit “newGuess”. We could just send the all the data as a response instead?
    - on “disconnect”
        - users left the room or closed the client, remove user from room/user list?