# Sources

Following this guide https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable

another guide https://www.pluralsight.com/guides/creating-a-chat-using-rails-action-cable

## Commands ran for setup

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
- [*] make websockets
- [ ] make word list database
- [ ] make api to import new word lists
