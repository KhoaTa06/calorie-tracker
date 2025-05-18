import React, { useState, useRef, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import * as bootstrap from 'bootstrap';


interface Props {
    onSubmit: (name: string, rep: number, weight: number, duration: string, calories: number, date: string) => void;
    nameProps?: string;
    repProps?: number;
    weightProps?: number;
    durationProps?: Duration;
    caloriesProps?: number;
    dateProps?: string;
}

interface Duration {
    hour: number;
    minute: number;
    second: number;
}

function ExerciseAdd({onSubmit, nameProps, repProps, weightProps, durationProps, caloriesProps, dateProps}: Props) {
    const [exerciseName, setExerciseName] = useState<string>("");
    const [exerciseRep, setExerciseRep] = useState<number>(0);
    const [exerciseWeight, setExerciseWeight] = useState<number>(0);
    const [exerciseDuration, setExerciseDuration] = useState<Duration>({
        hour: 0,
        minute: 0,
        second: 0});
    const [exerciseCalories, setExerciseCalories] = useState<number>(0);
    const [exerciseDate, setExerciseDate] = useState<string>(new Date().toISOString().split('T')[0]);

    const modalRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        if (nameProps && repProps && weightProps && durationProps && caloriesProps && dateProps) {
            setExerciseName(nameProps);
            setExerciseRep(repProps);
            setExerciseWeight(weightProps);
            setExerciseDuration(durationProps);
            setExerciseCalories(caloriesProps);
            setExerciseDate(dateProps);
        }
        }
    )

    const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setExerciseDuration((prevDuration) => ({
            ...prevDuration,
            [name]: Number(value),
        }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (modalRef.current) {
            const modalInstance = bootstrap.Modal.getOrCreateInstance(modalRef.current);
            modalInstance.hide();
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
        }

        const formattedDuration = `${String(exerciseDuration.hour).padStart(2, '0')}:${String(exerciseDuration.minute).padStart(2, '0')}:${String(exerciseDuration.second).padStart(2, '0')}`;
        console.log(exerciseName, exerciseRep, exerciseWeight, exerciseDuration, exerciseCalories, exerciseDate);
        onSubmit(exerciseName, exerciseRep, exerciseWeight, formattedDuration, exerciseCalories, exerciseDate);
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
                        <form className="g-3" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="validationServer01" className="form-label">Exercise Name</label>
                                <input type="text" className="form-control is-invalid" id="validationServer01" value={exerciseName} onChange={(e)=>setExerciseName(e.target.value)} required/>
                                <div id="validationServer01" className="invalid-feedback">
                                    Please provide a valid exercise name.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="validationServer02" className="form-label">Repetition</label>
                                <input type="number" className="form-control" id="validationServer02" min={0} max={99999} value={exerciseRep} onChange={(e)=>setExerciseRep(Number(e.target.value))}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseWeight" className="form-label">Weight</label>
                                <input className="form-control" id="exerciseWeight" min={0} max={99999} value={exerciseWeight} onChange={(e)=>setExerciseWeight(Number(e.target.value))}></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseDuration" className="form-label">Duration</label>

                                <div className="row">
                                    <div className="col"><input type="number" className="form-control" min={0} max={24} id="hour" value={exerciseDuration.hour} onChange={handleDurationChange}/></div>
                                    <div className="col-1"><p>:</p></div>
                                    <div className="col"><input type="number" className="form-control" min={0} max={60} id="minute" value={exerciseDuration.minute} onChange={handleDurationChange}/></div>
                                    <div className="col-1"><p>:</p></div>
                                    <div className="col"><input type="number" className="form-control" min={0} max={60} id="second" value={exerciseDuration.second} onChange={handleDurationChange}/></div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseCalories" className="form-label">Calories</label>
                                <input type="number" className="form-control" id="exerciseCalories"min={0} max={99999} value={exerciseCalories} onChange={(e)=>setExerciseCalories(Number(e.target.value))}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exerciseDate" className="form-label">Date</label>
                                <input type="date" className="form-control" id="exerciseDate" value={exerciseDate} onChange={(e)=>setExerciseDate(e.target.value)}/>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                {location.state ? "Save Changes" : "Add Exercise"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExerciseAdd;