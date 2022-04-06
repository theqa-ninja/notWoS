# frozen_string_literal: true

class Guess < ApplicationRecord
  belongs_to :level
  belongs_to :guesser

  def take_a_guess(params)
    level = Level.find(params['level_id'])
    game_room = Gameroom.find(params['gameroom_id'])

    new_guess = Guess.new(
      gameroom_id: game_room.id,
      level_id: level.id,
      guess: params['guess'],
      guesser_id: params['guesser_id'],
      is_valid: params['guess'].in?(level.valid_words)
    )
    # TODO: need logic here to set if valid / was_locked
    if new_guess.save
      { type: 'new_guess', success: true, data: new_guess }
    else
      { type: 'new_guess', success: false, data: new_guess, errors: new_guess.errors.full_messages }
    end
  end
end
