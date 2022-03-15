class LevelsController < ApplicationController
  def create
    # game_room = Gameroom.new(game_room_params)
    level = Level.new(gameroom_id: params[:id])
    if level.save
      render json: level
    else
      render json: { errors: level.errors.full_messages }, status: 422
    end
  end

  def show
    level = Level.find(params[:id])
    render json: level, include: [:guesses]
  end

  private

  def level_params
    params.require(:gameroom_id)
  end
end
