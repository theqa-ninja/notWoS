# frozen_string_literal: true

class CreateGamerooms < ActiveRecord::Migration[7.0]
  def change
    create_table :gamerooms, id: :uuid do |t|
      t.string :name, null: false
      t.string :room_code, null: false
      t.integer :current_level, default: 0
      t.uuid :theme_id, null: true
      t.boolean :is_active, default: true

      t.timestamps
    end
    add_foreign_key :gamerooms, :themes, column: :theme_id
  end
end
