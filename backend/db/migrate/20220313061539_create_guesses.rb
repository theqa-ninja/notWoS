# frozen_string_literal: true

class CreateGuesses < ActiveRecord::Migration[7.0]
  def change
    create_table :guesses, id: :uuid do |t|
      t.uuid :guesser_id, null: false
      t.uuid :gameroom_id, null: false
      t.uuid :level_id, null: false
      t.string :guess
      t.boolean :is_valid
      t.boolean :was_locked, default: true

      t.timestamps
    end

    add_foreign_key :guesses, :guessers, column: :guesser_id
    add_foreign_key :guesses, :gamerooms, column: :gameroom_id
    add_foreign_key :guesses, :levels, column: :level_id
  end
end
