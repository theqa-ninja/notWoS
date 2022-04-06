# frozen_string_literal: true

class Level < ApplicationRecord
  has_many :guesses

  before_validation :set_values
  validates :starting_word, presence: true, length: { minimum: 5 }

  def next_level(params)
    game_room = Gameroom.find(params['gameroom_id'])
    current_level = Level.find(params['level_id'])
    if game_room[:creator_id] != params['guesser_id']
      return { json: { errors: "this user can't make a new level" }, status: 403 }
    end
    return { json: { errors: 'Game is not active, please make a new one' }, status: 403 } unless game_room[:is_active]

    # TODO: fix the starting word
    new_word = params[:word] || 'pokemon'
    game_room[:current_level] = game_room[:current_level] + 1
    new_level = Level.new(gameroom_id: game_room[:id], level: game_room[:current_level], starting_word: new_word,
                          is_active: true)
    current_level.is_active = false
    if new_level.save
      current_level.save!
      game_room.save!
      {type: 'new_level', success: true, data: new_level }
    else
      {type: 'new_level', success: false, errors: level.errors.full_messages, data: new_level }
    end
  end

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
