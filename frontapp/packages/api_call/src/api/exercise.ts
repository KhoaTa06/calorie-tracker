import axios from 'axios';

const API_URL = "http://localhost:8000";

export const fetchExercises = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/exercises`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log("Fetch exercises error: ", error);
    throw error;
  }
};