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

  def brand_new_game(params)
    current_game_room.is_active = false

    new_game = Gameroom.new(name: params['name'], creator_id: params['guesser_id'])
    if new_game.save!
      { type: 'new_game', success: true, data: new_game }
    else
      { type: 'new_game', success: false, errors: current_game_room.errors.full_messages, data: current_game_room }
    end
  end

  def new_game(params)
    current_game_room = Gameroom.find(params['gameroom_id'])
    return { errors: "this user can't make a new level", status: 403 } if current_game_room.creator_id != params['guesser_id']
    return { errors: 'Game is not active, please make a new one', status: 403 } unless current_game_room.is_active

    current_game_room.is_active = false

    new_game = Gameroom.new(name: current_game_room.name, creator_id: current_game_room.creator_id)

    if current_game_room.save
      new_game.save!
      { type: 'new_game', success: true, data: new_game }
    else
      { type: 'new_game', success: false, errors: current_game_room.errors.full_messages, data: current_game_room }
    end
  end

  private

  def generate_passcode
    self.room_code = Faker::Lorem.characters(number: 4, min_alpha: 4)
  end
end
