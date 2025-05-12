import {Routes, Route} from "react-router-dom";
import ExerciseHome from "./ExerciseHome";

function Exercise() {
    return (
        <Routes>
            <Route path="/" element={<ExerciseHome />}></Route>
         </Routes>
    )
}

export default Exercise;