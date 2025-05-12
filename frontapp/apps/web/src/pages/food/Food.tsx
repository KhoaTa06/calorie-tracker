import { Routes, Route } from "react-router-dom";
import FoodHome from "./FoodHome"; 
import FoodSearch from "../../components/Food/FoodSearch";
import FoodDetails from "./FoodDetails"

function Food() {
    return (
            <Routes>
                <Route path="/" element={<FoodHome />}></Route>
                <Route path="/search" element={<FoodSearch />}></Route>
                <Route path="/details/:fdcId" element={<FoodDetails />}></Route>
            </Routes>
    )
}

export default Food;