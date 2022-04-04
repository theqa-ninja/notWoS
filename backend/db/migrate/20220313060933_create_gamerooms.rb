# frozen_string_literal: true

class CreateGamerooms < ActiveRecord::Migration[7.0]
  def change
    create_table :gamerooms, id: :uuid do |t|
      t.string :name, null: false
      t.string :room_code, null: false
      t.integer :current_level, default: 0
      t.uuid :tag_id, null: true
      t.boolean :is_active, default: true
      t.uuid :creator_id, null: false

      t.timestamps
    end
    add_foreign_key :gamerooms, :tags, column: :tag_id
    add_foreign_key :gamerooms, :guessers, column: :creator_id
  end
end
