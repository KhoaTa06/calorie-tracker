import apiClient from "./client";

interface Exercise {
    id: number;
    user_id: number;
    name: string;
    repetitions: number;
    weight: number;
    duration: string;
    calories: number;
    date: string;
}

export const createExercise = async (exercise: Exercise): Promise<Exercise> => {
    try {
        const response = await apiClient.post<Exercise>('/exercise', exercise);
        return response.data;
    } catch (error) {
        throw new Error('Error creating exercise entry');
    }
}

export const getExercises = async (): Promise<Exercise[]> => {
    try {
        const response = await apiClient.get<Exercise[]>(`/exercises`);
        console.log("Fetched exercises:", response.data);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching exercise entries');
    }
}

export const updateExercise = async (exercise: Exercise): Promise<Exercise> => {
    try {
        const response = await apiClient.put<Exercise>(`/exercise/${exercise.user_id}`, exercise);
        return response.data;
    } catch (error) {
        throw new Error('Error updating exercise entry');
    }
}

export const deleteExercise = async (user_id: number): Promise<void> => {
    try {
        await apiClient.delete(`/exercise/${user_id}`);
    } catch (error) {
        throw new Error('Error deleting exercise entry');
    }
}

export const getExerciseById = async (user_id: number): Promise<Exercise> => {
    try {
        const response = await apiClient.get<Exercise>(`/exercise/${user_id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching exercise entry');
    }
}