type LevelPayload = {
  id: UUID;
  gameroom_id: UUID;
  level: number;
  starting_word: string;
  valid_letters: Array<string>;
  valid_words: Array<string>;
  fake_count: number;
  hidden_count: number;
  fake_letters: Array<string>;
  hidden_letters: Array<string>;
  displayed_letters: Array<string>;
  min_length: number;
  max_length: number;
  is_active: boolean;
  tag_id: UUID | null;
  created_at: string;
  updated_at: string;
};

export default LevelPayload;
