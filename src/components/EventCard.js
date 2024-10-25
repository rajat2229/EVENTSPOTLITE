import React from "react";
import "./EventCard.css";

const EventCard = ({ event, onClick }) => (
    <div className="event-card" onClick={() => onClick(event)}>
        <h3>{event.name}</h3>
        <p>{event.date}</p>
        <p>{event.location}</p>
    </div>
);

export default EventCard;
