# frozen_string_literal: true

class CreateGuessers < ActiveRecord::Migration[7.0]
  def change
    create_table :guessers, id: :uuid do |t|
      t.string :display_name, default: 'Guest'
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
