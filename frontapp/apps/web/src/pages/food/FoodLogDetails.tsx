import React, {useContext, useEffect, useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import SearchBar from '../../components/SearchBar';
import FoodSearch from '../../components/Food/FoodSearch';
import FoodAdd from '../../components/Food/FoodAdd';
import FoodDetailComp from '../../components/Food/FoodDetailComp';
import { FoodContext } from '@frontapp/api_call/FoodContext';
import { UpdateFoodLogProps } from '@frontapp/types/FoodType';

interface FoodEditProps {
    foodDetails: any;
    date: string;
    quantity: number;
    unit: string;
}

function FoodEdit() {
    const foodContext = useContext(FoodContext as React.Context<any>);
    const navigate = useNavigate();
    
    const location = useLocation();
    const [foodDetails, setFoodDetails] = useState<any>();
    const [foodLog, setFoodLog] = useState<any>();

    const [loading, setLoading] = useState<boolean>(true);

    const handleSubmit = (date: string, quantity: number, unit: string) => {
        const newFoodLog: UpdateFoodLogProps = {
            id: foodLog.id,
            food_id: Number(foodDetails.fdcId),
            quantity: quantity,
            unit: unit,
            date: date
        }
        try {
            foodContext.updateFoodLog({foodLog: newFoodLog});
            navigate("/food/diary");
        }catch (error) {
            console.error("Error adding food log:", error);
        }
    }

    useEffect(() => {
        if (location.state) {
            setFoodDetails(location.state.foodDetail);
            setFoodLog(location.state.foodLog);
            console.log("Food Log: ", location.state);
            setLoading(false)
        } else {
            navigate('/food/diary');
        }
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <SearchBar searchBox={<FoodSearch/>}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <NavBar />
                </div>
                <div className="col">
                    {foodDetails && foodLog && (
                        <FoodDetailComp foodDetails={foodDetails} date={foodLog.date} quantity={foodLog.quantity} unit={foodLog.unit} />
                    )}
                </div>
            </div>
        </div>
        <FoodAdd onSubmit={handleSubmit} dateProp={foodLog.date} quantityProp={foodLog.quantity} unitProp={foodLog.unit}/>
        </>
    )
}

export default FoodEdit;