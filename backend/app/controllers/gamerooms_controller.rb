# frozen_string_literal: true
class GameroomsController < ApplicationController
  def index
    game_rooms = Gameroom.all
    render json: game_rooms
  end

  def create
    game_room = Gameroom.new(game_room_params)
    if game_room.save
      render json: game_room
    else
      render json: { errors: game_room.errors.full_messages }, status: 422
    end
  end

  def update
    game_room = Gameroom.find(params[:id])
    # do stuff
    if game_room.save
      render json: game_room
    else
      render json: { errors: game_room.errors.full_messages }, status: 422
    end
  end

  def show
    game_room = Gameroom.find(params[:id])
    render json: game_room, include: [:levels]
  end

  private

  def game_room_params
    params.require(:gameroom).permit(:name)
  end

  # def create
  #   @game = Gameroom.new(message_params)
  #   message.user = current_user
  #   if message.save
  #     # do some stuff
  #   else
  #     redirect_to chatrooms_path
  #   end
  # end

  # def message_params
  #   params.require(:message).permit(:content, :chatroom_id)
  # end
end
