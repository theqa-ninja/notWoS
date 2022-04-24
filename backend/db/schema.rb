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

ActiveRecord::Schema[7.0].define(version: 2022_03_21_051904) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "gamerooms", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.string "room_code", null: false
    t.integer "current_level", default: 0
    t.uuid "tag_id"
    t.boolean "is_active", default: true
    t.uuid "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guessers", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "display_name", default: "Guest"
    t.string "email"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "guesses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "guesser_id", null: false
    t.uuid "gameroom_id", null: false
    t.uuid "level_id", null: false
    t.string "guess"
    t.boolean "is_valid"
    t.boolean "was_locked", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "imported_files", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "filename"
    t.uuid "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "levels", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "gameroom_id", null: false
    t.integer "level", null: false
    t.string "starting_word", null: false
    t.string "valid_letters", default: [], array: true
    t.string "valid_words", default: [], array: true
    t.integer "fake_count", default: 0
    t.integer "hidden_count", default: 0
    t.string "fake_letters", default: [], array: true
    t.string "hidden_letters", default: [], array: true
    t.string "displayed_letters", array: true
    t.integer "min_length", default: 4
    t.integer "max_length", null: false
    t.boolean "is_active", default: false
    t.uuid "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tags", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "word_lists", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "word"
    t.integer "length"
    t.string "letters", default: [], array: true
    t.string "filename"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["word"], name: "index_word_lists_on_word", unique: true
  end

  create_table "word_tags", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "tag_id", null: false
    t.uuid "word_list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_word_tags_on_tag_id"
    t.index ["word_list_id"], name: "index_word_tags_on_word_list_id"
  end

  add_foreign_key "gamerooms", "guessers", column: "creator_id"
  add_foreign_key "gamerooms", "tags"
  add_foreign_key "guesses", "gamerooms"
  add_foreign_key "guesses", "guessers"
  add_foreign_key "guesses", "levels"
  add_foreign_key "imported_files", "tags"
  add_foreign_key "levels", "gamerooms"
  add_foreign_key "levels", "tags"
  add_foreign_key "word_tags", "tags"
  add_foreign_key "word_tags", "word_lists"
end
