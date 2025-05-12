import React, {createContext } from 'react';
import {fetchFoodQuery, fetchFoodDetail} from './api.tsx';

const FoodContext = createContext({});

interface FoodProviderProps {
    children: React.ReactNode;
}

const FoodProvider = ({children}: FoodProviderProps) => {
    const fetchFoodSearch = async (query: string) => {
        try {
            const response = await fetchFoodQuery(query);
            return response.foods;
        } catch (error) {
            console.error('Error fetching food data:', error);
            throw error;
        }
    }

    const fetchFoodDetails = async (fdcId: number) => {
        try {
            const response = await fetchFoodDetail(fdcId);
            return response;
            }catch (error) {
                console.error('Error fetching food details:', error);
                throw error;
            }
    }


    return (
        <FoodContext.Provider value={{ fetchFoodSearch, fetchFoodDetails }}>
            {children}
        </FoodContext.Provider>
    );


    }

export { FoodContext, FoodProvider };