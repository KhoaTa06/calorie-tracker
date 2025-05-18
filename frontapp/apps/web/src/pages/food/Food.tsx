import { Routes, Route, Navigate } from "react-router-dom";
import FoodHome from "./FoodHome"; 
import FoodDetails from "./FoodDetails"
import FoodDiary from "./FoodDiary";
import FoodEdit from "./FoodLogDetails";
import FoodSearchResult from "./FoodSearchResult";

const FoodDiaryRedirect: React.FC = () => {
    const today = new Date().toISOString().split('T')[0]; // e.g., "2025-05-14"
    return <Navigate to={`/food/diary/${today}`} replace />;
  };

function Food() {
    return (
            <Routes>
                <Route path="/" element={<FoodHome />}></Route>
                <Route path="/diary/:date" element={<FoodDiary />}></Route>
                <Route path="/diary" element={<FoodDiaryRedirect />}></Route>
                <Route path="/diary/edit" element={<FoodEdit />}></Route>
                <Route path="/search/:query" element={<FoodSearchResult />}></Route>
                <Route path="/details/:fdcId" element={<FoodDetails />}></Route>
            </Routes>
    )
}

export default Food;