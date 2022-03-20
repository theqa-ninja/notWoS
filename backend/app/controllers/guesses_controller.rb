# frozen_string_literal: true
class GuessesController < ApplicationController
  def create
    game_room = Gameroom.find(params[:gameroom_id])
    render json: { errors: 'gameroom is not active' }, status: 400 unless game_room[:is_active]
    level = Level.find(params[:level_id])
    render json: { errors: 'level is not active' }, status: 400 unless level[:is_active]
    Guesser.find(params[:guesser_id])

    new_guess = Guess.new(
      gameroom_id: params[:gameroom_id],
      level_id: params[:level_id],
      guess: params[:guess],
      guesser_id: params[:guesser_id],
      is_valid: params[:guess].in?(level.valid_words)
    )
    # TODO: need logic here to set if valid / was_locked
    if new_guess.save
      # if new_guess[:valid] && !new_guess[:was_locked]
      GameroomChannel.broadcast_to(game_room, new_guess)
      render json: new_guess
      # end
    else
      render json: { errors: new_guess.errors.full_messages }, status: 422
    end
  end

  private

  def guess_params
    params.require(:gameroom_id, :level_id, :guess, :guesser_id)
  end
end
