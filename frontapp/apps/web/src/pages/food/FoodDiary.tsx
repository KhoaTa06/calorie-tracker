import { useContext, useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import FoodSearch from "../../components/Food/FoodSearch";
import { FoodContext } from "@frontapp/api_call/FoodContext";

function FoodDiary() {
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const foodContext = useContext(FoodContext as React.Context<any>);
    const {fetchFoodLog} = foodContext;

    const handleDateBackward = () => {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() - 1);
        const newDate = currentDate.toISOString().split('T')[0];
        setDate(newDate);
    }
    const handleDateFoward = () => {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + 1);
        const newDate = currentDate.toISOString().split('T')[0];
        setDate(newDate);
    }

    // useEffect(() => {
    //     fetchFoodLog()
    // })

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
                            <div className="col"><input type="date" className="form-control d-flex justify-content-center" value={date} onChange={(e) => setDate(e.target.value)}/></div>
                            <div className="col"><button className="btn btn-primary" onClick={handleDateFoward}>{">"}</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FoodDiary;