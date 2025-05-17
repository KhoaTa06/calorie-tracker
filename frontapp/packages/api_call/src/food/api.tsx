import axios from 'axios';
import { FoodLogProps, FoodLogResponse, UpdateFoodLogProps } from '@frontapp/types/FoodType';

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

export const fetchFoodLists = async (fdcIds: number[]) => {
    try {
        const fdcIdsString = fdcIds.join(',');
        const response = await axios.get(`${USDA_API}/v1/foods`, {
            params: {
                api_key: API_KEY,
                fdcIds: fdcIdsString,
            }
    });
    return response.data;
    } catch (error) {
        console.error("Error fetching food list: ", error);
        throw error;
    }
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

export const fetchFoodLogs = async (token: string, date: string): Promise<FoodLogResponse[]> => {
    try {
        const response = await axios.get(`${BACKEND_URL}/log/foods/${date}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        return response.data;
    }catch (error) {
        console.log("Fetch food log error: ", error);
        throw error;
    }
}

export const updateFoodLogs = async (token: string, log: UpdateFoodLogProps) => {
    const pay_load = {
        id: log.id,
        food_id: log.food_id,
        quantity: log.quantity,
        unit: log.unit,
        date: log.date
    }
    try {
        console.log("Update food log: ", pay_load);
        console.log("Log ID: ", log.id);
        await axios.put(`${BACKEND_URL}/log/food`, pay_load, 
        {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        }
    })
    }catch (error) {
        console.log("Update food error: ", error);
        throw error;
    }
}
