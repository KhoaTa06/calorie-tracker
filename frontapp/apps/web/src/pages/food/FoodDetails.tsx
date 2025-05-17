import React, {useEffect, useContext, useState } from 'react';
import {FoodContext} from '@frontapp/api_call/FoodContext';
import {useParams, useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import FoodSearch from '../../components/Food/FoodSearch';
import FoodDetailComp from '../../components/Food/FoodDetailComp';
import Breadcrumb from "../../components/Breadcrumb";
import { FoodLogProps } from '@frontapp/types/FoodType';
import FoodAdd from '../../components/Food/FoodAdd';

function FoodDetails() {
    const { fdcId } = useParams<{fdcId: string}> ();
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const foodContext = useContext(FoodContext as React.Context<any>);
    const { fetchFoodDetails, addFoodLog } = foodContext;

    const [foodDetails, setFoodDetails] = useState<any>(null);

    useEffect(() => {
        if (token && fetchFoodDetails) {
            const getFoodDetails = async () => {
                try {
                    const response = await fetchFoodDetails(fdcId);
                    setFoodDetails(response);
                    console.log("Food Details:", response);
                } catch (error) {
                    console.error("Error fetching food details:", error);
                }
            }
            getFoodDetails();
        }
    }, [fdcId]);

    const handleAddFood = async (date: string, quantity: number, unit: string) => {
        const foodLog: FoodLogProps = {
            food_id: Number(fdcId),
            quantity: quantity,
            unit: unit,
            date: date
        }
        try {
            await addFoodLog({foodLog});
            navigate("/food/diary");

        } catch (error) {
            console.error("Error adding food log:", error);
        }
    }

    return (
        <>
        <SearchBar searchBox={<FoodSearch/>}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"><NavBar /></div>
                <div className="col">
                    <h1>Food Details</h1>
                    {foodDetails && (
                    <div>
                        <Breadcrumb items={[{ title: "Food", link: "/food" }, { title: foodDetails.description, link: `/food/details/${fdcId}` }]} />
                        <FoodDetailComp foodDetails={foodDetails} />
                    </div>
                    )}
                </div>
            </div>
        </div>
        <FoodAdd onSubmit={handleAddFood}/>
        </>
    )
}

export default FoodDetails;