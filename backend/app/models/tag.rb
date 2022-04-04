# frozen_string_literal: true

class Tag < ApplicationRecord
  has_many :word_tag
  has_many :word_lists, through: :word_tags
end
