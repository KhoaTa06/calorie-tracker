import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate, Link} from "react-router-dom";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import FoodSearch from "../../components/Food/FoodSearch";
import { FoodContext } from "@frontapp/api_call/FoodContext";
import { FoodLogResponse } from "@frontapp/types/FoodType";

function FoodDiary() {
    const [foodLogList, setFoodLogList] = useState<FoodLogResponse[]>([]);
    const [foodList, setFoodList] = useState<any[]>([]);
    var { date } = useParams<{date: string}>();
    const foodContext = useContext(FoodContext as React.Context<any>);
    const {fetchFoodList, fetchFoodLog} = foodContext;

    const navigate = useNavigate();

    const handleDateBackward = () => {
        if (!date) return;
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() - 1);
        const newDate = currentDate.toISOString().split('T')[0];
        navigate(`/food/diary/${newDate}`);
    }

    const handleDateFoward = () => {
        if (!date) return;
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + 1);
        const newDate = currentDate.toISOString().split('T')[0];
        navigate(`/food/diary/${newDate}`);
    }

    useEffect(() => {
        try {
            const getLog = async () => {
                setFoodLogList(await fetchFoodLog(date));
            }
            getLog();
        }catch (error) {
            console.error("Error fetching food log:", error);
        }
    }, [date]);

    useEffect(() => {
        try {
            const getLogDetails = async () => {
                if (!foodLogList || foodLogList.length === 0) return;
                const foodDetails = await fetchFoodList(foodLogList.map((food) => food.food_id));
                setFoodList(foodDetails);
            }
            getLogDetails();
        }catch (error) {
            console.error("Error fetching food details:", error);
        }
    }, [foodLogList]);

    return (
        <>
        <SearchBar searchBox={<FoodSearch/>}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <NavBar />
                </div>
                <div className="col">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col d-flex justify-content-end"><button className="btn btn-primary" onClick={handleDateBackward}>{"<"}</button></div>
                            <div className="col"><input type="date" className="form-control d-flex justify-content-center" value={date} onChange={(e) => date = e.target.value}/></div>
                            <div className="col"><button className="btn btn-primary" onClick={handleDateFoward}>{">"}</button></div>
                        </div>
                    </div>

                    <div className="container p-2">
                        <ul className="list-group">
                            {foodLogList.map((food, index) => {
                                const foodDetail = foodList[index] || {description: "Unknown food"};
                                return (
                                    <Link to={`/food/diary/edit`} className="list-group-item list-group-item-action" key={index} state={{foodDetail: foodDetail, foodLog: food}}>
                                            <p>{foodDetail.description}</p>
                                            <p>{food.quantity} {food.unit}</p>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FoodDiary;