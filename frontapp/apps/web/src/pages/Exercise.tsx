import { useEffect, useState } from "react";
import ExercisePreview from "../components/Exercise/ExercisePre";
import { ExerciseType } from "@frontapp/types/ExerciseType";
import { fetchExercises } from "@frontapp/api_call/Exercise";

function Exercise() {
    const [exercises, setExercises] = useState([] as ExerciseType[]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(token){
            const getExercises = async () => {
                try {
                    const response = await fetchExercises(token);
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
                    id={exercise.id}
                    name={exercise.name}
                    calories={exercise.calories}
                    onClick={() => console.log(`Clicked on ${exercise.name}`)}
                />
            ))}
        </div>
        </>
    );
}

export default Exercise;