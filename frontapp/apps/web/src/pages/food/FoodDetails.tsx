import React, {useEffect, useContext, useState } from 'react';
import {FoodContext} from '@frontapp/api_call/FoodContext';
import {Link, useParams} from 'react-router-dom';
import NavBar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import FoodSearch from '../../components/Food/FoodSearch';
import Breadcrumb from "../../components/Breadcrumb";
import { AuthorizeNavItems } from '../../components/Constant';


function FoodDetails() {
    const { fdcId } = useParams<{fdcId: string}> ();
    const token = localStorage.getItem('token');

    const foodContext = useContext(FoodContext as React.Context<any>);
    const { fetchFoodDetails } = foodContext;

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
    }, []);

    const handleAddFood = () => {
        
    }

    return (
        <>
        <SearchBar searchBox={<FoodSearch/>}/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"><NavBar items={AuthorizeNavItems} /></div>
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
                                    <div className="col d-flex justify-content-end"><button type="button" className="btn btn-primary" onClick={handleAddFood}>Add Food</button></div>
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
                                    {foodDetails.foodNutrients.map((foodNutrient: any) => {
                                        return (<li className="list-group-item">
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
        </>
    )
}

export default FoodDetails;