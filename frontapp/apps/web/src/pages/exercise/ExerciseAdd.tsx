import React, { useContext } from 'react';
import { ExerciseContext } from '@frontapp/api_call/ExerciseContext';
import { ExerciseContextType } from '@frontapp/types/ExerciseType';

interface Props {
    onSubmit: (e: React.FormEvent) => void;
}

function ExerciseAdd({onSubmit}: Props) {
    const exerciseContext = useContext(ExerciseContext as React.Context<ExerciseContextType>);
    if (!exerciseContext) {
        throw new Error("ExerciseContext not initialized");
    }

    const addHandler = () => {
        const exerciseName = (document.getElementById("exerciseName") as HTMLInputElement).value;
        const exerciseRep = (document.getElementById("exerciseRep") as HTMLInputElement).value;
        const exerciseWeight = (document.getElementById("exerciseWeight") as HTMLInputElement).value;
        const exerciseDuration = (document.getElementById("exerciseDuration") as HTMLInputElement).value;
        const exerciseCalories = (document.getElementById("exerciseCalories") as HTMLInputElement).value;
        const exerciseDate = (document.getElementById("exerciseDate") as HTMLInputElement).value;

        console.log(exerciseName, exerciseRep, exerciseWeight, exerciseDuration, exerciseCalories, exerciseDate);
    }
    return (
        <>
        <div className="modal fade" id="exerciseAddModal" tabIndex={-1} aria-labelledby="exerciseAddModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exerciseAddModalLabel">Add Exercise</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="g-3" onSubmit={addHandler}>
                            <div className="mb-3">
                                <label htmlFor="validationServer01" className="form-label">Exercise Name</label>
                                <input type="text" className="form-control is-invalid" id="validationServer01" required/>
                                <div id="validationServer01" className="invalid-feedback">
                                    Please provide a valid exercise name.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="validationServer02" className="form-label">Repetition</label>
                                <input type="number" className="form-control" id="validationServer02" min={0} max={99999}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseWeight" className="form-label">Weight</label>
                                <input className="form-control" id="exerciseWeight" min={0} max={99999}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseDuration" className="form-label">Duration</label>
                                <input type="time" className="form-control" id="exerciseDuration" pattern="[0-9]{2}:[0:9]:{2}"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseCalories" className="form-label">Calories</label>
                                <input type="number" className="form-control" id="exerciseCalories"min={0} max={99999}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseDate" className="form-label">Date</label>
                                <input type="date" className="form-control" id="exerciseDate" />
                            </div>

                            <button type="submit" className="btn btn-primary">Add Exercise</button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExerciseAdd;