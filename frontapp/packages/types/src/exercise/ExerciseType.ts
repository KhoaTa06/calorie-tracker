
export interface ExerciseType {
    id: number | null;
    user_id: number | null;
    name: string | null;
    repetition: number | null;
    weight: number | null;
    duration: number | null;
    calories: number | null;
    date: string | null;
}

export interface ExerciseContextType {
    fetchAllExercises?: (token: string) => Promise<ExerciseType[]>;
    fetchExercise?: (token: string, id: number) => Promise<ExerciseType>;
    addExercise?: (token: string, exerciseData: ExerciseType) => Promise<ExerciseType>;
    modifyExercise?: (token: string, id: number, exerciseData: ExerciseType) => Promise<ExerciseType>;
    removeExercise?: (token: string, id: number) => Promise<void>;
}