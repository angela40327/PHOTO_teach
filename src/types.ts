export type AppMode = 'student' | 'teacher';
export type FontSize = 'normal' | 'medium' | 'large';

export interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  x: number; // percentage from left
  y: number; // percentage from top
  category: 'architecture' | 'scenery' | 'symbol' | 'religion';
  description: string;
  historicalNote: string;
  inquiryPrompt: string;
}

export interface TimelineEvent {
  year: string;
  era: string;
  title: string;
  description: string;
  significance: string;
  tag: string;
}

export interface MapPoint {
  id: string;
  name: string;
  japanese: string;
  type: 'heritage' | 'nature' | 'bridge' | 'culture';
  x: number; // % in SVG map
  y: number;
  distanceFromByodoin: string;
  walkMinutes: number;
  description: string;
  googleMapQuery: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
}

export interface RubricLevel {
  level: string;
  scoreRange: string;
  descriptor: string;
}

export interface RubricCriterion {
  dimension: string;
  weight: string;
  levels: {
    exemplary: string;
    proficient: string;
    developing: string;
  };
}

export interface StudentWorksheetState {
  studentName: string;
  schoolName: string;
  gradeClass: string;
  selectedTask: string;
  observationNotes: string;
  geographyAnalysis: string;
  historyReflection: string;
  thinkingResponse: string;
  outputSummary: string;
  selfEvaluationScore: number;
}
