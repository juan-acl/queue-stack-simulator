import { useEffect, useState } from "react";
import "./modalStyle.scss";
import { v4 } from "uuid";
import { RowData } from "src/columns";

interface ModalQueueProps {
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
    enqueue: (data: RowData) => void;
}

interface FormData {
    name: string;
    lastname: string;
    date: string;
    status: string;
}

export const ModalQueue = ({ openModal, setOpenModal, enqueue }: ModalQueueProps) => {
    const initialState: FormData = {
        name: '',
        lastname: '',
        date: '',
        status: ''
    }
    const [formData, setFormData] = useState<FormData>(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (!openModal) {
            setFormData(initialState);
        }
    }, [openModal])

    const handleSubmit = () => {
        let validate = Object.keys(formData).every((key) => formData[key as keyof typeof formData] !== '')
        if (!validate) {
            alert('Por favor lleva todos los campos');
            return;
        }
        enqueue({
            id: v4(),
            name: formData.name,
            lastname: formData.lastname,
            date: formData.date,
            status: formData.status
        });
        onClose();
    };

    const onClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            {openModal && (
                <div className={`modal-overlay ${openModal ? 'show' : ''}`}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="title-header">Enter Information</h2>
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
    );
};
