
import { blackListNutrient } from "@frontapp/types/FoodType";

interface FoodDetailsCompProps {
    foodDetails: any;
    date?: string;
    quantity?: number;
    unit?: string;
}

function FoodDetailComp({foodDetails, date, quantity, unit}: FoodDetailsCompProps) {
    return (
        <>
    {foodDetails === null && <p>Loading...</p>}
    {foodDetails && (<div className="card mt-3">
        <div className="card-body">
            <div className="row">
                <div className="col"><h2>{foodDetails.description}</h2></div>
                <div className="col d-flex justify-content-end" style={{height: "100%"}}>
                    {quantity ? 
                    <div>
                        <button
                        type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#foodAddModal">
                            Edit Food
                        </button>
                        <button
                        type="button" className="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#deleteWarnModal">
                            Delete Food
                        </button>
                    </div> : 
                                <button 
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#foodAddModal"
                                >
                                    Add Food
                                </button>}
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
            <li className="list-group-item">
            {(() => {
                if (quantity && unit && date) {
                    return (
                        <div>
                            <div className="mb-3 row  align-item-center">
                                <label className="d-flex">Date: {new Date(date).getMonth() + 1} / {new Date(date).getDate()} / {new Date(date).getFullYear()}</label>
                            </div>
                            <div className="mb-3 row">
                                <label>Quantity: {quantity} {unit}</label>
                            </div>
                        </div>
                    )
                }else {
                    return <p>Serving Size: {foodDetails.servingSize} {foodDetails.servingSizeUnit}</p>
                }
                }) ()}
            </li>

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
    </div>)}
    </>
    )
}

export default FoodDetailComp;