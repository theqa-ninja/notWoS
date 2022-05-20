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

  def brand_new_game(data)
    data['guesser_id'] = @guesser.id
    new_game = Gameroom.new.brand_new_game(data)
    GameroomChannel.broadcast_to(@game_room, new_game)
    @game_room = new_game if new_game[:success]
    stream_for @game_room
  end

  def new_level(data)
    data['guesser_id'] = @guesser.id
    data['gameroom_id'] = @game_room.id
    # TODO: remove this temp hack
    data['guesser_id'] = @game_room.creator_id
    new_level = Level.new.next_level(data)
    @level = new_level if new_level[:success]
    GameroomChannel.broadcast_to(@game_room, new_level)
  end

  def new_game(data)
    data['guesser_id'] = @guesser.id
    data['gameroom_id'] = @game_room.id
    # TODO: remove this temp hack
    data['guesser_id'] = @game_room.creator_id
    new_game = Gameroom.new.new_game(data)
    GameroomChannel.broadcast_to(@game_room, new_game)
    @game_room = new_game if new_game[:success]
    stream_for @game_room
  end

  def new_guess(data)
    data['guesser_id'] = @guesser.id
    data['gameroom_id'] = @game_room.id
    GameroomChannel.broadcast_to(@game_room, Guess.new.take_a_guess(data))
  rescue StandardError
    # TODO: put better error logging message here
    print 'failed to find stuff'
  end
end
