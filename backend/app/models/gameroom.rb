# frozen_string_literal: true

class Gameroom < ApplicationRecord
  # before_create { self.room_code = Faker::Lorem.characters(number: 4, min_alpha: 4) }
  before_validation :generate_passcode

  has_many :levels
  validates :room_code, presence: true, length: { in: 4..6 }

  # attr_reader :gameroom

  # def initialize(params = {})
  #   # @gameroom = Gameroom.new(params)
  #   self.room_code = Faker::Lorem.characters(number: 4, min_alpha: 4)
  # end

  private

  def generate_passcode
    self.room_code = Faker::Lorem.characters(number: 4, min_alpha: 4)
  end
end
