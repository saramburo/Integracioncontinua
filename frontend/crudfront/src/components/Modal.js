import React, { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';

const MyModal = ({ options, title, textBody, buttonClass, textFunction, onSubmit }) => {
    const modalRef = useRef(null);
    let myModal = null;

    useEffect(() => {
        // Initialize the Bootstrap modal
        myModal = new Modal(modalRef.current, options);

        // Cleanup on unmount
        return () => {
            myModal.dispose();
        };
    }, [options]);

    return (
        <div className="modal fade" id="myModal" tabIndex="-1" ref={modalRef}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{textBody}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className={`btn ${buttonClass}`} data-bs-dismiss="modal" onClick={onSubmit}>{textFunction}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyModal;