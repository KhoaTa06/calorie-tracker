import {Routes, Route} from "react-router-dom";
import ExerciseHome from "./ExerciseHome";
import ExerciseAdd from "./ExerciseAdd";

function Exercise() {
    return (
        <Routes>
            <Route path="/" element={<ExerciseHome />}></Route>
            <Route path="/add" element={<ExerciseAdd />}></Route>
         </Routes>
    )
}

export default Exercise;