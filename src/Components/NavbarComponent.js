import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../Styles/NavbarComponent.css';

const NavbarComponent = ({isDarkMode}) => {
  return (
    <>
      <Navbar expand="lg" className={`navbar ${isDarkMode ? 'dark-mode navbar-dark' : 'navbar-light'}`}>
        <Navbar.Brand as={Link} to="/" style={{ flex: 1 }}>
          NETFLIX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll style={{ justifyContent: 'flex-end', width: '100%' }}>
            <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Home
            </NavLink>
            <NavLink to="/tvShow" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              TvShow
            </NavLink>
            <NavLink to="/upcoming" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Upcoming
            </NavLink>
            <NavLink to="/latest" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              Latest
            </NavLink>
            <NavLink to="/people" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
              People
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

       

    </>
  );
};

export default NavbarComponent;
