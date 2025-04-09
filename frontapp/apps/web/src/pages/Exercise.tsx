import { useState, useEffect, useContext } from "react";
import ExercisePreview from "../components/Exercise/ExercisePre";
import { AuthContext } from "../../contexts/AuthContext";
import { getExercises } from "@frontend/shared"

function Exercise() {
    const authContext = useContext(AuthContext);
    const { token } = authContext || {};
    const [exercises, setExercises] = useState<Array<{id: number; name: string; calories: number}>>([]);
    
    useEffect(() => {
        if (token) {
            const fetchExercises = async () => {
                try {
                    const exercise1 = await getExercises();
                    setExercises(exercise1);
                    console.log("Fetched exercises:", exercise1);

                } catch (error) {
                    console.error("Error fetching exercises:", error);
                }

            };
            fetchExercises();
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