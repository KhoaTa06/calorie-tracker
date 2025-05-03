import axios from 'axios';

const API_URL = "http://localhost:8000";

const fetchExercises = async (token: string) => {
    try {
        const response = await axios.get(`${API_URL}/exercises`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Fetch exercises error: ", error);
        throw error;
    }
};

const fetchExerciseById = async (token: string, id: number) => {
    try {
        const response = await axios.get(`${API_URL}/exercises/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Fetch exercise by ID error: ", error);
        throw error;
    }
};

const createExercise = async (token: string, exerciseData: any) => {
    try {
        const response = await axios.post(`${API_URL}/exercises`, exerciseData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Create exercise error: ", error);
        throw error;
    }
};

const updateExercise = async (token: string, id: number, exerciseData: any) => {
    try {
        const response = await axios.put(`${API_URL}/exercises/${id}`, exerciseData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Update exercise error: ", error);
        throw error;
    }
};

const deleteExercise = async (token: string, id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/exercises/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }
    catch (error) {
        console.log("Delete exercise error: ", error);
        throw error;
    }
};

export { fetchExercises, fetchExerciseById, createExercise, updateExercise, deleteExercise };