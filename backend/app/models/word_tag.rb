# frozen_string_literal: true
class WordTag < ApplicationRecord
  belongs_to :word_list
  belongs_to :tag, optional: true
end
