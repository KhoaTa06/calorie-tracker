import apiClient from 'client';
export const createExercise = async (exercise) => {
    try {
        const response = await apiClient.post('/exercise', exercise);
        return response.data;
    }
    catch (error) {
        throw new Error('Error creating exercise entry');
    }
};
export const getExercises = async (user_id) => {
    try {
        const response = await apiClient.get(`/exercise/${user_id}`);
        return response.data;
    }
    catch (error) {
        throw new Error('Error fetching exercise entries');
    }
};
export const updateExercise = async (exercise) => {
    try {
        const response = await apiClient.put(`/exercise/${exercise.user_id}`, exercise);
        return response.data;
    }
    catch (error) {
        throw new Error('Error updating exercise entry');
    }
};
export const deleteExercise = async (user_id) => {
    try {
        await apiClient.delete(`/exercise/${user_id}`);
    }
    catch (error) {
        throw new Error('Error deleting exercise entry');
    }
};
export const getExerciseById = async (user_id) => {
    try {
        const response = await apiClient.get(`/exercise/${user_id}`);
        return response.data;
    }
    catch (error) {
        throw new Error('Error fetching exercise entry');
    }
};
