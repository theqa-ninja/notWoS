# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Dir.glob('public/word*') do |filename|
  # theme = Theme.find_or_create_by!(filename.split('/')[-1][0..-5])
  file_data = File.read(filename).split()
  tag_name = filename.split('/')[-1][0..-5]
  tag_id = Tag.where(name: tag_name).first_or_create!
  file_data.each do |line|
    temp_word = WordList.create!(
      word: line,
      length: line.length,
      filename: filename,
      all_themes: [tag_name]
    )

  end
end

10.times do |i|
  guest = Faker::Boolean.boolean(true_ratio: 0.4)
  if guest
    Guesser.create!
  else
    Guesser.create!(
      display_name: Faker::Internet.username,
      email: Faker::Internet.email,
      password: Faker::Internet.password(min_length: 4, max_length: 6)
    )
  end
  puts "User #{i} created as a #{guest ? 'guest' : 'registered user'}"
end

3.times do |i|
  g_room = Gameroom.create!(
    name: "Room #{i}",
    creator_id: Guesser.all.sample.id
  )
  puts "Created #{g_room.name}"
  level_count = (1..5).to_a.sample
  level_count.times do |t|
    word = 'hi'
    word = Faker::Lorem.word while word.length < 5
    Level.create!(
      gameroom_id: g_room.id,
      level: t + 1,
      starting_word: word,
      min_length: 3,
      hidden_count: [0, 0, 0, 1, 2, 3].sample,
      fake_count: [0, 0, 0, 1, 2, 3].sample,
      is_active: (t + 1) == level_count
    )
    puts "Creating level #{t + 1} for #{g_room.name}"
  end
  g_room.current_level = level_count
  g_room.save!
end
