import React, {useEffect, useContext, useState } from 'react';
import {FoodContext} from '@frontapp/api_call/FoodContext';
import {useParams, useNavigate } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import FoodSearch from '../../components/Food/FoodSearch';
import Breadcrumb from "../../components/Breadcrumb";
import { blackListNutrient } from "@frontapp/types/FoodType";
import { FoodLogProps } from '@frontapp/types/FoodType';
import FoodAdd from './FoodAdd';

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
                    {foodDetails === null && <p>Loading...</p>}
                    {foodDetails && (
                    <div>
                        <Breadcrumb items={[{ title: "Food", link: "/food" }, { title: foodDetails.description, link: `/food/details/${fdcId}` }]} />
                        <div className="card mt-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col"><h2>{foodDetails.description}</h2></div>
                                    <div className="col d-flex justify-content-end">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#foodAddModal">Add Food</button>
                                    </div>
                                </div>
                                <h4>General Information</h4>
                                <li className="list-group-item">
                                {(() => {
                                                if (foodDetails.foodClass == "Branded") {
                                                    return <p>Source: {foodDetails.brandOwner}</p>
                                                }
                                                else {
                                                    return <p>Source: {foodDetails.dataType}</p>
                                                }
                                            }) ()}</li>
                                <li className="list-group-item">Serving size: {foodDetails.servingSize} {foodDetails.servingSizeUnit}</li>
                    
                                <h4>Nutrient Information</h4>
                                <ul className="list-group">
                                    {foodDetails.foodNutrients.map((foodNutrient: any, index: number) => {
                                        if (blackListNutrient.includes(foodNutrient.nutrient.name)) {
                                            return null;
                                        }
                                        return (<li className="list-group-item" key={index}>
                                            {foodNutrient.nutrient.name} {foodNutrient.amount} {foodNutrient.nutrient.unitName}
                                        </li>)
                                    })}
                                </ul>
                            </div>
                        </div>
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