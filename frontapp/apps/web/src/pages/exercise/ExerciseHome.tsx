import React, { useEffect, useState, useContext } from "react";
import ExercisePreview from "../../components/Exercise/ExercisePre";
import { ExerciseType, ExerciseContextType } from "@frontapp/types/ExerciseType";
import { ExerciseContext } from "@frontapp/api_call/ExerciseContext";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import ExerciseSearch from "../../components/Exercise/ExerciseSearch";
import ExerciseAdd from "../../components/Exercise/ExerciseAdd";

function ExerciseHome() {
    const [exercises, setExercises] = useState([] as ExerciseType[]);
    const token = localStorage.getItem('token');

    const exerciseContext = useContext(ExerciseContext as React.Context<ExerciseContextType>);
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

    const addHandler = () => {
        return (true)
    }
    return (
        <>
        <SearchBar searchBox={<ExerciseSearch/>}/>

        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <NavBar/>
                </div>
                <div className="col">
                        <h1>Exercises</h1>
                    </div>
                <div className="col-2">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exerciseAddModal">Add Exercise</button>
                </div>


            </div>
        </div>
        

        <ExerciseAdd onSubmit={addHandler}/>
        </>
    );
}

export default ExerciseHome;