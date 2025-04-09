
export interface ExerciseType {
    id: number;
    user_id: number;
    name: string;
    repetition: number | null;
    weight: number | null;
    duration: number | null;
    calories: number;
    date: string;
}