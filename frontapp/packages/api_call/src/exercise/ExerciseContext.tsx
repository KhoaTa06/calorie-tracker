import React, { createContext } from 'react';
import { ExerciseContextType, ExerciseType } from '@frontapp/types/ExerciseType';
import { fetchExercises, fetchExerciseById, createExercise, updateExercise, deleteExercise } from './api.tsx';

const ExerciseContext = createContext<ExerciseContextType>({
});

interface ExerciseProviderProps {
  children: React.ReactNode;
}

const ExerciseProvider = ({ children }: ExerciseProviderProps) => {
  const fetchAllExercises = async (token: string) => {
    try {
      const exercises = await fetchExercises(token);
      return exercises;
    } catch (error) {
      console.log('Fetch all exercises error: ', error);
      throw error;
    }
  };

  const fetchExercise = async (token: string, id: number) => {
    try {
      const exercise = await fetchExerciseById(token, id);
      return exercise;
    } catch (error) {
      console.log('Fetch exercise by ID error: ', error);
      throw error;
    }
  };
  const addExercise = async (token: string, exerciseData: ExerciseType) => {
    try {
      const newExercise = await createExercise(token, exerciseData);
      return newExercise;
    } catch (error) {
      console.log('Create exercise error: ', error);
      throw error;
    }
  };
  const modifyExercise = async (token: string, id: number, exerciseData: ExerciseType) => {
    try {
      const updatedExercise = await updateExercise(token, id, exerciseData);
      return updatedExercise;
    } catch (error) {
      console.log('Update exercise error: ', error);
      throw error;
    }
  };
  const removeExercise = async (token: string, id: number) => {
    try {
      await deleteExercise(token, id);
    } catch (error) {
      console.log('Delete exercise error: ', error);
      throw error;
    }
  };

  return (
    <ExerciseContext.Provider
      value={{fetchAllExercises, fetchExercise, addExercise, modifyExercise, removeExercise}}>
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider }