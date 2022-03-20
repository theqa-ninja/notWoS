# frozen_string_literal: true
class GameroomChannel < ApplicationCable::Channel
  def subscribed
    game_room = Gameroom.where(is_active: true).find(params[:id])
    stream_for game_room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # def notify(data)
  #   ActionCable.server.broadcast @game_channel, { title: 'New things!', body: data }
  # end
end
