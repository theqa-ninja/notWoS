# frozen_string_literal: true
class LevelsController < ApplicationController
  def create
    Level.next_level(params)
    # game_room = Gameroom.find(params[:gameroom_id])
    # unless game_room[:is_active]
    #   render json: { errors: "Game is not active, please make a new one"}, status: 403
    # end
    # # TODO: fix the starting word
    # new_word = params[:word] || "pokemon"
    # game_room[:current_level] = game_room[:current_level] + 1
    # level = Level.new(gameroom_id: game_room[:id], level: game_room[:current_level], starting_word: new_word)
    # if level.save
    #   game_room.save!
    #   render json: level
    # else
    #   render json: { errors: level.errors.full_messages }, status: 422
    # end
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
