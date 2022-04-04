# frozen_string_literal: true
class WordList < ApplicationRecord
  has_many :word_tags
  has_many :tags, through: :word_tags

  def all_themes=(names)
    self.tags = names.map do |name|
      Tag.where(name: name.strip).first_or_create!
    end
  end

  def all_themes
    tags.map(&:name).join(', ')
  end
end
