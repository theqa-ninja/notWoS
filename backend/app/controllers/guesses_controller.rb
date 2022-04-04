# frozen_string_literal: true
class GuessesController < ApplicationController
  def create
    # game_room = Gameroom.find(params[:gameroom_id])
    # render json: { errors: 'gameroom is not active' }, status: 400 unless game_room[:is_active]
    Guess.take_a_guess(params)
  end

  private

  def guess_params
    params.require(:gameroom_id, :level_id, :guess, :guesser_id)
  end
end
