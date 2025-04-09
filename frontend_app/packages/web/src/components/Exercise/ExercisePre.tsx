// import React from "react";

interface ExercisePreviewProps {
    id: number;
    name: string;
    calories: number;
    onClick: (id: number) => void;
}

function ExercisePreview({ id, name, calories, onClick }: ExercisePreviewProps) {
    return (
        <>
        <div
        className="card mb-3 shadow-sm"
        onClick={() =>onClick(id)}
            >
            <div className="card-body d-flex align-items-center">
                <h5 className="card-title mb-0">{name}</h5>
                <p className="card-text">Calories {calories}</p>
            </div>
        </div>
        </>
    )
}

export default ExercisePreview;