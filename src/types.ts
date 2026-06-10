export type AgeBand = "preschool" | "primary" | "older";

export type WordLevel = "starter" | "easy" | "normal" | "challenge" | "advanced";

export type SpellingLevel = "none" | "guided" | "full";

export interface WordItem {
  id: string;
  themeId: string;
  word: string;
  meaning: string;
  symbol: string;
  example: string;
  ageBands: AgeBand[];
  level: WordLevel;
  spellingLevel: SpellingLevel;
}

export interface WordStats {
  mastery: number;
  attempts: number;
  correct: number;
  wrong: number;
  lastSeenAt: string | null;
  unlockedAt: string;
}

export interface DailyActivity {
  attempts: number;
  correct: number;
  wrong: number;
  practicedWordIds: string[];
  wrongWordIds: string[];
}

export interface RoundResult {
  date: string;
  mode: string;
  correct: number;
  total: number;
  wrongWordIds: string[];
}

export interface ProgressProfile {
  unlockedWordIds: string[];
  wordStats: Record<string, WordStats>;
  dailyActivity: Record<string, DailyActivity>;
  rounds: RoundResult[];
  soundEnabled: boolean;
  badges: string[];
}

export interface ProgressState {
  selectedAgeBand: AgeBand | null;
  profiles: Partial<Record<AgeBand, ProgressProfile>>;
}
