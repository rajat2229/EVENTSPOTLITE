import React, { useState } from "react";
import eventsData from "./data/eventsData";
import EventCard from "./components/EventCard";
import EventModal from "./components/EventModal";
import Navbar from "./components/Navbar";
import "./styles/App.css";

const App = () => {
    const [filteredEvents, setFilteredEvents] = useState(eventsData);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleSearch = (query) => {
        const filtered = eventsData.filter(event =>
            event.name.toLowerCase().includes(query.toLowerCase()) ||
            event.location.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEvents(filtered);
    };

    return (
        <div className="app">
            <Navbar onSearch={handleSearch} />
            <div className="event-list">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} onClick={setSelectedEvent} />
                ))}
            </div>
            <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </div>
    );
};

export default App;
