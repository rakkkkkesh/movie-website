import React from 'react';
import { Form, Button } from 'react-bootstrap';
import "../Styles/SearchBar.css";

const SearchBar = ({ search, setSearch, onSearch, isDarkMode, toggleDarkMode }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        if (typeof onSearch === 'function') {
            onSearch(search);
        }
    };

    return (
        <Form className={`d-flex justify-content-center my-3 search-bar-container ${isDarkMode ? 'dark-mode' : ''}`} onSubmit={handleSearch}>
            <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" type="submit" className="search-button">Search</Button>
            <div className="toggle-dark-mode" onClick={toggleDarkMode} style={{ cursor: 'pointer', marginLeft: '20px' }}>
                <h4 className={`toggle-icon ${isDarkMode ? 'dark' : 'light'}`}>
                    {!isDarkMode ? (
                        <i className="fa-solid fa-moon" style={{ color: isDarkMode ? 'white' : 'black' }}></i>
                    ) : (
                        <i className="fa-solid fa-sun" style={{ color: isDarkMode ? 'white' : 'black' }}></i>
                    )}
                </h4>
            </div>
        </Form>
    );
};

export default SearchBar;
