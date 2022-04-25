import { SocketResponse } from 'lib/MessageTypes';
import LevelPayload from 'lib/payloads/LevelPayload';

export const Usernames = [
  'kironto',
  'qa_ninja',
  'xhumming',
  'hemidex',
  'lunar_marya',
  'staymad',
  '7kats',
  'morgan_victoria',
  'jayshun',
  'xephano',
  'w0ngaccount',
  'sunflawer'
];

export const MockDictionary = [
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
  valid_words: MockDictionary,
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

export const newLvl: SocketResponse<LevelPayload> = {
  identifier: {
    channel: 'GameroomChannel',
    id: '338b0599-4ca8-485f-97cc-2e0c8f2e253c'
  },
  message: {
    type: 'new_level',
    success: true,
    data: {
      id: '78da3825-dadf-4a3b-96a8-818ce3623e1d',
      gameroom_id: '338b0599-4ca8-485f-97cc-2e0c8f2e253c',
      level: 10,
      starting_word: 'pokemon',
      valid_letters: ['e', 'k', 'm', 'n', 'o', 'o', 'p'],
      valid_words: [],
      fake_count: 0,
      hidden_count: 0,
      fake_letters: [],
      hidden_letters: [],
      displayed_letters: ['o', 'k', 'e', 'p', 'm', 'n', 'o'],
      min_length: 4,
      max_length: 7,
      is_active: true,
      tag_id: null,
      created_at: '2022-04-12T22:04:23.809Z',
      updated_at: '2022-04-12T22:04:23.809Z'
    }
  }
};
