# frozen_string_literal: true

class CreateLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :levels, id: :uuid do |t|
      t.uuid :gameroom_id
      t.integer :level, null: false
      t.string :starting_word, null: false
      t.string :letters, array: true
      t.string :valid_words, array: true
      t.string :fake_letters, array: true, default: []
      t.string :hidden_letters, array: true, default: []
      t.integer :min_length, null: false
      t.integer :max_length, null: false
      t.uuid :theme_id, null: true

      t.timestamps
    end
    add_foreign_key :levels, :themes, column: :theme_id
    add_foreign_key :levels, :gamerooms, column: :gameroom_id
  end
end
