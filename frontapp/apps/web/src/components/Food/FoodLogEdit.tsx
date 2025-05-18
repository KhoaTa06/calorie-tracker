import React, {useState, useEffect, useContext} from 'react';
import * as bootstrap from 'bootstrap';

function FoodLogEdit() {
    const [date, setDate] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [unit, setUnit] = useState<string>("");


    return (
        <>
        <div className="modal fade" id="foodLogEditModal" tabIndex={-1} aria-labelledby="foodLogEditModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="foodLogEditModalLabel">Edit Food Log</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form className="g-3">
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                <div id="date" className="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input type="number" className="form-control" id="quantity" min={1} max={99999} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required/>
                                <div id="quantity" className="invalid-feedback">
                                    Please provide a valid quantity.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="unit" className="form-label">Unit</label>
                                <select className="form-select" id="unit" value={unit} onChange={(e) => setUnit(e.target.value)} required>
                                    <option defaultValue="true">Choose a measuring unit</option>
                                    <option value="oz">oz</option>
                                    <option value="lb">lb</option>
                                    <option value="cup">cup</option>
                                    <option value="tbsp">tbsp</option>
                                    <option value="g">g</option>
                                    <option value="kg">kg</option>
                                    <option value="ml">ml</option>
                                    <option value="l">l</option>
                                </select>
                                <div id="unit" className="invalid-feedback">
                                    Please provide a valid unit.
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FoodLogEdit;