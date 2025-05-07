import { Routes, Route } from "react-router-dom";
import FoodHome from "./FoodHome"; 

function Food() {
    return (
            <Routes>
                <Route path="/" element={<FoodHome />}></Route>
                <Route path="/id" element={<h1>Food ID</h1>}></Route>
            </Routes>
    )
}

export default Food;