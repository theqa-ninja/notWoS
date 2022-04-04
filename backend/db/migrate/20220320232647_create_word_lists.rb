class CreateWordLists < ActiveRecord::Migration[7.0]
  def change
    create_table :word_lists, id: :uuid do |t|
      t.string :word
      t.integer :length
      # t.uuid :tag_id, default: nil
      t.string :filename

      t.timestamps
    end
    add_index :word_lists, :word, unique: true
  end
end
