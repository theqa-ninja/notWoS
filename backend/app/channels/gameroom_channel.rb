# frozen_string_literal: true
class GameroomChannel < ApplicationCable::Channel
  def subscribed
    @game_room = Gameroom.where(is_active: true).find(params[:id])
    @level = Level.where(is_active: true).where(gameroom_id: @game_room.id).first
    # TODO: change this later
    @guesser = Guesser.all.sample
    stream_for @game_room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def new_level(data)
    data['guesser_id'] = @guesser.id
    data['gameroom_id'] = @game_room.id
    # TODO: remove this temp hack
    data['guesser_id'] = @game_room.creator_id
    data['level_id'] = @level.id
    temp = Level.new.next_level(data)
    @level = temp if temp.instance_of?(Level)
  end

  def new_guess(data)
    data['guesser_id'] = @guesser.id
    data['gameroom_id'] = @game_room.id
    Guess.new.take_a_guess(data)
  end
end
