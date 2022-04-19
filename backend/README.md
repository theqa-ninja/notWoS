# Sources

Following this guide currently https://medium.com/@valentinowong/using-rails-action-cable-with-a-vanilla-javascript-front-end-1e00ed90067e#060d

~~Following this guide https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable~~

~~another guide https://www.pluralsight.com/guides/creating-a-chat-using-rails-action-cable~~


## Commands to run for setting up
```
rbenv local 3.0.2
bundle install
bundle exec db:create
bundle exec db:migrate
bundle exec db:seed
bundle exec rails s
```

## Testing things
Connect postman to `ws://localhost:3000/WoScable`
Subscribe first to the channel
```
{
    "command": "subscribe",
    "identifier": "{\"channel\":\"GameroomChannel\", \"id\":\"6e29cd92-a9fa-4a56-93c1-10ca13e3b747\"}"
}
```

Make a guess
```
{
    "command": "message",
    "data": "{\"action\" : \"guess\", \"level_id\":\"97b8a57b-49e5-4a0a-b3f4-3cc5f22f18c0\",\"guess\": \"blah again\"}",
    "identifier": "{\"channel\":\"GameroomChannel\", \"id\":\"6e29cd92-a9fa-4a56-93c1-10ca13e3b747\"}"
}
```

Make a new level!
```
{
    "command": "message",
    "data": "{\"action\" : \"new_level\"}",
    "identifier": "{\"channel\":\"GameroomChannel\", \"id\":\"6e29cd92-a9fa-4a56-93c1-10ca13e3b747\"}"
}
```

Make a new game!
```
{
    "command": "message",
    "data": "{\"action\" : \"new_game\"},
    "identifier": "{\"channel\":\"GameroomChannel\", \"id\":\"29e5435b-734f-43d2-bfa6-fb0e5c791de7\"}"
}
```
sample return
```
{
    "identifier": "{\"channel\":\"GameroomChannel\", \"id\":\"29e5435b-734f-43d2-bfa6-fb0e5c791de7\"}",
    "message": {
        "type": "new_game",
        "success": true,
        "data": {
            "id": "90f7c2a5-4a35-4590-bfd0-aa5a64b4ce7e",
            "name": "Room 1",
            "room_code": "poke",
            "current_level": 0,
            "tag_id": null,
            "is_active": true,
            "creator_id": "771a5a33-687f-4799-97a1-fd944c219b3a",
            "created_at": "2022-04-19T04:20:51.310Z",
            "updated_at": "2022-04-19T04:20:51.310Z"
        }
    }
}```

## Commands ran while creating stuff

```
rbenv local 3.0.2
gem install rails --pre
rails new --help
rails new backend --database=postgresql --api --skip-action-mailer -T -J
cd backend
rm -rf .git #let's us commit the folder
rails generate migration enable_pgcrypto_extension # enables uuid for postgresql
rails generate model gameroom name:string room_code:string current_level:integer
rails generate model guessers display_name:string email:string password:string
rails generate model guesses guesser_id:uuid gameroom_id:uuid guess:string valid:boolean was_locked:boolean
rails generate model themes name:string
rails generate model imported_files filename:string theme:uuid
rails generate model levels gameroom_id:uuid level:integer starting_word:string letters:string valid_words:string fake_letters:string hidden_letters:string min_length:integer max_length:integer tag_id:uuid
rubocop -A .
```

## TODO:
- [x] make models
- [x] seed data
- [x] make websockets
- [ ] make APIs for calls
- [ ] clean up websockets?
- [ ] clean up after levels / games finish
- [ ] make word list database
- [ ] make api to import new word lists
