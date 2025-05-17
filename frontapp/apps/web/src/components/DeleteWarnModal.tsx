import {useRef} from "react";
import * as bootstrap from "bootstrap";

interface DeleteWarnModalProps {
    subject: string;
    onDelete: () => void;
}

function DeleteWarnModal({subject, onDelete}: DeleteWarnModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleDelete = (e: React.FormEvent) => {
        e.preventDefault();
        if (modalRef.current) {
            const modalInstance = bootstrap.Modal.getOrCreateInstance(modalRef.current);
            modalInstance.hide();
            document.body.classList.remove('modal-open');
            const backdrop = document.querySelector(".modal-backdrop");
            if (backdrop) backdrop.remove();
        }

        onDelete();
    }

    return (
        <>
        <div className="modal fade" id="deleteWarnModal" tabIndex={-1} aria-labelledby="deleteWarnModalLabel" aria-hidden="true" ref={modalRef}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteWarnModalLabel">Deleting {subject}</h5>
                        <button type="button" className="btn-close" data-bs-dissmiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">
                        <p>Are you sure you want to delete this {subject}?</p>
                        <p>This action cannot be undone.</p>
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DeleteWarnModal;