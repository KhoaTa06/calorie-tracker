import React from 'react';

interface FoodAddProps {
    onSubmit: (quantity: number, unit: string) => void;
}

function FoodAdd({onSubmit}: FoodAddProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const quantity = (document.getElementById("quantity") as HTMLInputElement).value;
        const unit = (document.getElementById("unit") as HTMLSelectElement).value;
        onSubmit(Number(quantity), unit);
    }

    return (
        <>
        <div className="modal fade" id="foodAddModal" tabIndex={-1} aria-labelledby="foodAddModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="foodAddModalLabel">Add Food</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <form className="g-3" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input type="number" className="form-control" id="quantity" min={1} max={99999} required/>
                                <div id="quantity" className="invalid-feedback">
                                    Please provide a valid quantity.
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="unit" className="form-label">Unit</label>
                                <select className="form-select" id="unit" required>
                                    <option selected>Choose a measuring unit</option>
                                    <option value="oz">oz</option>
                                    <option value="lb">lb</option>
                                    <option value="cup">cup</option>
                                    <option value="tbsp">tbsp</option>
                                    <option value="g">g</option>
                                    <option value="kg">kg</option>
                                    <option value="ml">ml</option>
                                    <option value="l">l</option>
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Food</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FoodAdd;