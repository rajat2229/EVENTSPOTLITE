import React from "react";
import "./EventModal.css";

const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>{event.name}</h2>
                <img src={event.image} alt={event.name} />
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.description}</p>
            </div>
        </div>
    );
};

export default EventModal;
