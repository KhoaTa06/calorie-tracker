import axios from 'axios';
import { FoodLogProps } from '@frontapp/types/FoodType';

const USDA_API = "https://api.nal.usda.gov/fdc";
const API_KEY = "AzIyMbMHTbAI8CPQzSWftS3qbbAmHx6kmHbhzVKz"

const BACKEND_URL = "http://localhost:8000"

export const fetchFoodQuery = async (query: string) => {
    const response = await axios.get(`${USDA_API}/v1/foods/search`, {
        params: {
            query,
            api_key: API_KEY,
        },
    });
    return response.data;
}

export const fetchFoodDetail = async (fdcId: number) => {
    const response = await axios.get(`${USDA_API}/v1/food/${fdcId}`, {
        params: {
            api_key: API_KEY,
            },
        });
    return response.data;
}

export const fetchFoodList = async (fdcIds: [number]) => {
    const response = await axios.get(`${USDA_API}/v1/foods`, {
        params: {
            fdcIds: fdcIds,
            api_key: API_KEY,
        }
    });
    return response.data;
}

export const addFoodLogs = async (token: string, log: FoodLogProps) => {
    try {
    const response = await axios.post(`${BACKEND_URL}/food`, log, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
    }catch (error) {
        console.log("Add food error: ", error);
        throw error;
    }
}

export const fetchFoodLogs = async (token: string) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/log/food`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }catch (error) {
        console.log("Fetch food log error: ", error);
        throw error;
    }
}