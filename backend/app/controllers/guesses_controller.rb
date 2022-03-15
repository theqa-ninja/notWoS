class GuessesController < ApplicationController
  def create
    new_guess = Guess.new(gameroom_id: params[:gameroom_id])
    # TODO: need logic here to set if valid / was_locked
    if new_guess.save
      if new_guess[:valid] && !new_guess[:was_locked]
        GameRoomChannel.broadcast_to(params[:gameroom_id], params[:guess])
        render json: new_guess
      end
    else
      render json: { errors: new_guess.errors.full_messages }, status: 422
    end
  end

  private

  def guess_params
    params.require(:gameroom_id, :level_id, :guess, :guesser_id)
  end
end
