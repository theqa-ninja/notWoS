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
Submit something like this in the body
```
{
    "command": "subscribe",
    "identifier": "{\"channel\":\"GameroomChannel\", \"id\":\"66ab6aed-758a-476d-82cb-781a9d200c57\"}"
}
```
Make a API POST call to `localhost:3000/guesses?gameroom_id=66ab6aed-758a-476d-82cb-781a9d200c57&level_id=6c59dbad-283c-446e-bf9f-65461608ec17&guess=hello&guesser_id=44d9747f-04c5-4021-9cd2-5ec51d870902` to submit a guess

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
rails generate model levels gameroom_id:uuid level:integer starting_word:string letters:string valid_words:string fake_letters:string hidden_letters:string min_length:integer max_length:integer theme_id:uuid
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
