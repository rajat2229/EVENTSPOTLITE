import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <nav className="navbar">
            <h1>EventSpot Lite</h1>
            <input
                type="text"
                placeholder="Search events..."
                value={query}
                onChange={handleSearch}
            />
        </nav>
    );
};

export default Navbar;
