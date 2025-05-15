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
    const pay_load = {
        food_id: log.food_id,
        quantity: log.quantity,
        unit: log.unit,
        date: log.date
    }
    try {
        await axios.post(`${BACKEND_URL}/log/food`, pay_load, 
        {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    }catch (error) {
        console.log("Add food error: ", error);
        throw error;
    }
}

export const fetchFoodLogs = async (token: string, date: string) => {
    try {
        console.log("Date: ", date);
        const response = await axios.get(`${BACKEND_URL}/log/food/${date}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
    }catch (error) {
        console.log("Fetch food log error: ", error);
        throw error;
    }
}