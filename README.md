# notWoS

models

gameroom
- uuid
- room_name
- room_code
- current level
- theme (themes.uuid)

users
- uuid
- displayname
- email? (if not filled in, temporary user?)

guesses
- guesser (user.uuid)
- gameroom (gameroom.uuid)
- valid (boolean)
- locked? (boolean)

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

themes
- uuid
- name (string)

dictionary
- uuid
- name (string)
- list (filename string)