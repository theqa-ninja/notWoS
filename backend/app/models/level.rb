# frozen_string_literal: true

class Level < ApplicationRecord
  has_many :guesses

  before_validation :set_values
  validates :starting_word, presence: true, length: { minimum: 5 }

  def as_json(options = {})
    options[:except] ||= %i[valid_letters hidden_letters fake_letters valid_words]
    # TODO: figure out how to hide words before sending them
    super(options)
  end

  def next_level(params)
    game_room = Gameroom.find(params['gameroom_id'])
    return { errors: "this user can't make a new level", status: 403 } if game_room.creator_id != params['guesser_id']
    return { errors: 'Game is not active, please make a new one', status: 403 } unless game_room.is_active

    current_level = Level.where(is_active: true).where(gameroom_id: params['gameroom_id']).first

    # TODO: increment this for difficulty
    max_length = current_level.max_length

    new_word = params[:word] || WordList.where(length: max_length).pluck(:word).sample
    game_room[:current_level] = game_room[:current_level] + 1
    new_level = Level.new(gameroom_id: game_room.id, level: game_room.current_level, starting_word: new_word,
                          is_active: true)
    current_level.is_active = false
    if new_level.save
      current_level.save!
      game_room.save!
      # TODO: remove valid letters, valid words, fake letters, hidden letters, starting word from reply
      { type: 'new_level', success: true, data: new_level }
    else
      { type: 'new_level', success: false, errors: level.errors.full_messages, data: new_level }
    end
  end

  private

  def find_words(starting_word)
    word_array = starting_word.chars.sort
    WordList.all.pluck(:word, :letters).each_with_object(Array.new([])) do |word, arr|
      arr.push(word[0]) if word[1] & word_array == word[1]
    end
  end

  def set_values
    self.max_length = starting_word.length
    self.valid_letters = starting_word.chars.sort
    if hidden_count.positive?
      self.hidden_letters = valid_letters.sample(hidden_count)
      self.valid_letters = valid_letters - hidden_letters
    end
    if fake_count.positive?
      self.fake_letters = Faker::Lorem.characters(number: fake_count, min_alpha: fake_count).chars.sort
    end
    self.valid_words = find_words(starting_word)
    self.displayed_letters = (valid_letters + fake_letters - hidden_letters).shuffle
  end
end
