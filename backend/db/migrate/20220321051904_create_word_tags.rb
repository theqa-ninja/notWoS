class CreateWordTags < ActiveRecord::Migration[7.0]
  def change
    create_table :word_tags, id: :uuid do |t|
      t.belongs_to :tag, null: false, foreign_key: true, type: :uuid
      t.belongs_to :word_list, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
