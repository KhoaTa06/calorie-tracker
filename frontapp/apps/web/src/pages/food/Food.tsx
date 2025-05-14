import { Routes, Route } from "react-router-dom";
import FoodHome from "./FoodHome"; 
import FoodDetails from "./FoodDetails"
import FoodDiary from "./FoodDiary";
import FoodSearchResult from "./FoodSearchResult";

function Food() {
    return (
            <Routes>
                <Route path="/" element={<FoodHome />}></Route>
                <Route path="/diary" element={<FoodDiary />}></Route>
                <Route path="/search/:query" element={<FoodSearchResult />}></Route>
                <Route path="/details/:fdcId" element={<FoodDetails />}></Route>
            </Routes>
    )
}

export default Food;