import React, {useState, useRef} from 'react';
import * as bootstrap from 'bootstrap';

interface FoodAddProps {
    onSubmit: (date: string, quantity: number, unit: string) => void;
}

function FoodAdd({onSubmit}: FoodAddProps) {
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const date = (document.getElementById("date") as HTMLInputElement).value;
        const quantity = (document.getElementById("quantity") as HTMLInputElement).value;
        const unit = (document.getElementById("unit") as HTMLSelectElement).value;
        if (modalRef.current) {
            const modalInstance = bootstrap.Modal.getOrCreateInstance(modalRef.current);
            modalInstance.hide();
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector('.modal-backdrop');
            if (backdrop) backdrop.remove();
          }
        onSubmit(date, Number(quantity), unit);
    }

    return (
        <>
        <div className="modal fade" id="foodAddModal" tabIndex={-1} aria-labelledby="foodAddModalLabel" aria-hidden="true" ref={modalRef}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="foodAddModalLabel">Add Food</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <form className="g-3" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                                <div id="date" className="invalid-feedback">
                                    Please provide a valid date.
                                </div>
                            </div>

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