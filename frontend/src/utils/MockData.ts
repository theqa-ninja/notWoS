export const Usernames = [
  'kironto',
  'qa_ninja',
  'xhumming',
  'hemidex',
  'lunar_marya',
  'staymad',
  '7kats'
];

export const words = [
  'temperature',
  'putter',
  'premature',
  'tamperer',
  'permeate',
  'amputee',
  'trumpet',
  'tempura',
  'mature',
  'mutate',
  'repeat',
  'retear',
  'matte',
  'rearm',
  'puree',
  'reaper',
  'rapture',
  'tamper',
  'temper',
  'purer',
  'treat',
  'terra',
  'eater',
  'tarre',
  'turret',
  'repute'
];

export const MockLevel: Level = {
  game_room: '7323d638-dbff-4344-9855-e4f63d021c4e',
  starting_word: 'temperature',
  letters: 'temperature'.split(''),
  valid_words: words,
  fake_letters: ['b'],
  hidden_letters: ['p', 't'],
  min_length: 5,
  max_length: 'temperature'.length,
  dictionary: 'ce8945af-6ac8-48af-98d6-fbfbf6c62b1e',
  gameOver: false,
  completed: false
};

export const MockGame: GameRoom = {
  id: '03af0339-bdec-42f1-a85a-b999627dbf57',
  game_room: '1a4de6b4-9eb2-4155-8fc7-08224b5df1ee',
  room_code: 'fpevk',
  level: 1,
  theme_id: null,
  owner: 'ac50715f-e790-43e2-8dbb-909310ee657a'
};
