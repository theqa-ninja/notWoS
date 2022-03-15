# frozen_string_literal: true

class Gameroom < ApplicationRecord
  has_many :levels
  validates :room_code, presence: true, uniqueness: true, case_sensitive: false, length: { in: 4..6 }
end
