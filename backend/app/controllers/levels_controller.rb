# frozen_string_literal: true
class LevelsController < ApplicationController
  def create
    Level.next_level(params)
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
