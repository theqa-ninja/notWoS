# frozen_string_literal: true

class Guess < ApplicationRecord
  belongs_to :level
  belongs_to :guesser
end
