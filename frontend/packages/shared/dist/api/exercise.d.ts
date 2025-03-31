interface Exercise {
    user_id: number;
    exercise_name: string;
    repetitions: number;
    weight: number;
    duration: string;
    calories: number;
    date: string;
}
export declare const createExercise: (exercise: Exercise) => Promise<Exercise>;
export declare const getExercises: (user_id: number) => Promise<Exercise[]>;
export declare const updateExercise: (exercise: Exercise) => Promise<Exercise>;
export declare const deleteExercise: (user_id: number) => Promise<void>;
export declare const getExerciseById: (user_id: number) => Promise<Exercise>;
export {};
