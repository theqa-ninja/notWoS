# frozen_string_literal: true

class Guess < ApplicationRecord
  belongs_to :level
  belongs_to :guesser

  def take_a_guess(params)
    level = Level.find(params['level_id'])
    game_room = Gameroom.find(params['gameroom_id'])

    new_guess = if params['guess'].split.length > 1
                  Guess.new(
                    gameroom_id: params['gameroom_id'],
                    level_id: params['level_id'],
                    guesser_id: params['guesser_id'],
                    guess: params['guess'],
                    is_valid: false
                  )
                else
                  Guess.new(
                    gameroom_id: params['gameroom_id'],
                    level_id: params['level_id'],
                    guess: params['guess'],
                    guesser_id: params['guesser_id'],
                    is_valid: params['guess'].in?(level.valid_words)
                  )
                end
    # TODO: need logic here to set if valid / was_locked
    if new_guess.save
      {type: 'new_guess', success: true, data: new_guess}
    else
      {type: 'new_guess', success: false, data: new_guess, errors: new_guess.errors.full_messages }
    end
  end
end
