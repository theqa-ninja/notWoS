# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Following this guide https://blog.heroku.com/real_time_rails_implementing_websockets_in_rails_5_with_action_cable

another guide https://www.pluralsight.com/guides/creating-a-chat-using-rails-action-cable

Commands to run

```
rbenv local 3.0.2
gem install rails --pre
rails new backend --database=postgresql -T --api
cd backend
rails generate migration enable_pgcrypto_extension # enables uuid for postgresql
rails generate model gameroom name:string password:string current_level:integer
rails generate model 
```

