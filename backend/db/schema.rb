# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 20_220_313_062_122) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'pgcrypto'
  enable_extension 'plpgsql'
  enable_extension 'uuid-ossp'

  create_table 'gamerooms', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'name', null: false
    t.string 'room_code', null: false
    t.integer 'current_level', default: 0
    t.uuid 'theme_id'
    t.boolean 'is_active', default: true
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'guessers', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'display_name', default: 'Guest'
    t.string 'email'
    t.string 'password'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'guesses', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.uuid 'guesser_id', null: false
    t.uuid 'gameroom_id', null: false
    t.uuid 'level_id', null: false
    t.string 'guess'
    t.boolean 'is_valid'
    t.boolean 'was_locked', default: true
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'imported_files', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'filename'
    t.uuid 'theme_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'levels', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.uuid 'gameroom_id', null: false
    t.integer 'level', null: false
    t.string 'starting_word', null: false
    t.string 'valid_letters', default: [], array: true
    t.string 'valid_words', default: [], array: true
    t.integer 'fake_count', default: 0
    t.integer 'hidden_count', default: 0
    t.string 'fake_letters', default: [], array: true
    t.string 'hidden_letters', default: [], array: true
    t.string 'displayed_letters', array: true
    t.integer 'min_length', default: 4
    t.integer 'max_length', null: false
    t.boolean 'is_active', default: false
    t.uuid 'theme_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'themes', id: :uuid, default: -> { 'gen_random_uuid()' }, force: :cascade do |t|
    t.string 'name'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  add_foreign_key 'gamerooms', 'themes'
  add_foreign_key 'guesses', 'gamerooms'
  add_foreign_key 'guesses', 'guessers'
  add_foreign_key 'guesses', 'levels'
  add_foreign_key 'imported_files', 'themes'
  add_foreign_key 'levels', 'gamerooms'
  add_foreign_key 'levels', 'themes'
end
