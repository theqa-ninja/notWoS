# frozen_string_literal: true

class Level < ApplicationRecord
  has_many :guesses

  before_validation :set_values
  validates :starting_word, presence: true, length: { minimum: 5 }

  private

  def set_values
    self.max_length = starting_word.length
    self.valid_letters = starting_word.chars.sort
    if hidden_count.positive?
      self.hidden_letters = valid_letters.sample(hidden_count)
      self.valid_letters = valid_letters - hidden_letters
    end
    if fake_count.positive?
      self.fake_letters = Faker::Lorem.characters(number: fake_count, min_alpha: fake_count).chars.sort
    end
    self.displayed_letters = (valid_letters + fake_letters - hidden_letters).shuffle
  end
end
