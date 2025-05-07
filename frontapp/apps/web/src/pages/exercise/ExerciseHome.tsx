import React, { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import ExercisePreview from "../../components/Exercise/ExercisePre";
import { ExerciseType, ExerciseContextType } from "@frontapp/types/ExerciseType";
import { ExerciseContext } from "@frontapp/api_call/ExerciseContext";
import Navbar from "../../components/Navbar";
import ExerciseAdd from "./ExerciseAdd";
import { AuthorizeNavItems } from "../../components/Constant";

function ExerciseHome() {
    const [exercises, setExercises] = useState([] as ExerciseType[]);
    const token = localStorage.getItem('token');

    // const navigate = useNavigate();

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

    // const addHandler = () => {
    //     return (true)
    // }
    return (
        <>
        <Navbar items={AuthorizeNavItems}/>

        <div className="container">
            <div className="row justify-content-between">
                <div className="col"><h1>Exercises</h1></div>

                <div className="col d-flex justify-content-end align-items-center">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exerciseAddModal">Add Exercise</button>
                </div>
            </div>
        </div>
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

        <ExerciseAdd />
        </>
    );
}

export default ExerciseHome;