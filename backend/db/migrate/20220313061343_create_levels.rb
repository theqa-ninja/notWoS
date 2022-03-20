# frozen_string_literal: true

class CreateLevels < ActiveRecord::Migration[7.0]
  def change
    create_table :levels, id: :uuid do |t|
      t.uuid :gameroom_id, null: false
      t.integer :level, null: false
      t.string :starting_word, null: false
      t.string :valid_letters, array: true, default: []
      t.string :valid_words, array: true, default: []
      t.integer :fake_count, default: 0
      t.integer :hidden_count, default: 0
      t.string :fake_letters, array: true, default: []
      t.string :hidden_letters, array: true, default: []
      t.string :displayed_letters, array: true
      t.integer :min_length, default: 4
      t.integer :max_length, null: false
      t.boolean :is_active, default: false
      t.uuid :theme_id, null: true

      t.timestamps
    end
    add_foreign_key :levels, :themes, column: :theme_id
    add_foreign_key :levels, :gamerooms, column: :gameroom_id
  end
end
