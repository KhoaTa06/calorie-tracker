import React, {createContext } from 'react';
import {fetchFoodQuery, fetchFoodDetail, fetchFoodLogs, addFoodLogs} from './api.tsx';
import { AuthContext } from '@frontapp/api_call/AuthContext';
import { useContext } from 'react';
import { AuthContextType } from '@frontapp/types/AuthContextType';
import { FoodLogResponse } from '@frontapp/types/FoodType';

const FoodContext = createContext({});

interface FoodProviderProps {
    children: React.ReactNode;
}

const FoodProvider = ({children}: FoodProviderProps) => {
    const authContext = useContext(AuthContext as React.Context<AuthContextType>);
    const {token} = authContext;
    if (!token) {
        throw new Error("Token not found in AuthContext");
    }

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

    const fetchFoodLog = async (date: string): Promise<FoodLogResponse[]> => {
        try {
            const response = await fetchFoodLogs(token, date);
            console.log("Fetch food log: ", response);
            return response;
        }catch (error) {
            console.error('Error fetching food logs:', error);
            throw error;
        }
    }

    const addFoodLog = async (log: any) => {
        try {
            await addFoodLogs(token, log.foodLog);
        }catch (error) {
            console.error('Error adding food log:', error);
            throw error;
        }
    }

    return (
        <FoodContext.Provider value={{ fetchFoodSearch, fetchFoodDetails, fetchFoodLog, addFoodLog }}>
            {children}
        </FoodContext.Provider>
    );


    }

export { FoodContext, FoodProvider };