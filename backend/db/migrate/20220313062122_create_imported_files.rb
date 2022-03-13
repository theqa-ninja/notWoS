# frozen_string_literal: true

class CreateImportedFiles < ActiveRecord::Migration[7.0]
  def change
    create_table :imported_files, id: :uuid do |t|
      t.string :filename
      t.uuid :theme_id

      t.timestamps
    end
    add_foreign_key :imported_files, :themes, column: :theme_id
  end
end
