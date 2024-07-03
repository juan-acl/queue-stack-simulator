import { useState } from "react";
import "./modalStyle.scss";

interface ModalQueueProps {
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
}

export const ModalQueue = ({ openModal, setOpenModal }: ModalQueueProps) => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        date: '',
        status: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // onSubmit(formData);
        // onClose();
    };

    const onClose = () => {
        setOpenModal(false);
    }

    return (
        <>
            {openModal && (
                <div className={`modal-overlay ${openModal ? 'show' : ''}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="title-header" >Enter Information</h2>
                        </div>
                        <div className="modal-body">
                            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                            <input type="text" name="lastname" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                            <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} />
                            <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} />
                        </div>
                        <div className="modal-footer">
                            <button className="close-btn" onClick={onClose}>Close</button>
                            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}