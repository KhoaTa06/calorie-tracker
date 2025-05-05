import React, { useEffect, useState, useContext } from "react";
import ExercisePreview from "../components/Exercise/ExercisePre";
import { ExerciseType, ExerciseContextType } from "@frontapp/types/ExerciseType";
import { ExerciseContext } from "@frontapp/api_call/ExerciseContext";

function Exercise() {
    const [exercises, setExercises] = useState([] as ExerciseType[]);
    const token = localStorage.getItem('token');

    const exerciseContext = useContext(ExerciseContext as React.Context<ExerciseContextType>);
    if (!exerciseContext) {
        throw new Error("ExerciseContext not initialized");
    }
    const { fetchAllExercises } = exerciseContext;

    useEffect(() => {
        if(token && fetchAllExercises){
            const getExercises = async () => {
                try {
                    const response = await fetchAllExercises(token);
                    setExercises(response);
                } catch (error) {
                    console.error("Error fetching exercises:", error);
                }
            }
            getExercises();
        }
    }, [token]);
    return (
        <>
        <div className="card">
            {exercises.map((exercise) => (
                <ExercisePreview
                    id={exercise.id ?? 0}
                    name={exercise.name ?? ""}
                    calories={exercise.calories ?? 0}
                    onClick={() => console.log(`Clicked on ${exercise.name}`)}
                />
            ))}
        </div>
        </>
    );
}

export default Exercise;