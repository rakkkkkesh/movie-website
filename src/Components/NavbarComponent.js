// import React, { useState } from 'react';
// import { Navbar, Nav, Form, Button } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';
// import '../Styles/NavbarComponent.css';

// const NavbarComponent = ({ search, setSearch, onSearch, }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (typeof onSearch === 'function') {
//       onSearch(e); // Call the search function without navigating
//     }
//   };

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//     document.body.classList.toggle('dark-mode');
//   };

//   return (
//     <>
//       <Navbar
//         expand="lg"
//         className={`navbar ${isDarkMode ? 'dark-mode navbar-dark' : 'navbar-light'}`}
//       >
//         <Navbar.Brand as={Link} to="/" style={{ flex: 1 }}>
//           NETFLIX
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0" navbarScroll style={{ justifyContent: 'flex-end', width: '100%' }}>
//             <NavLink
//               to="/"
//               className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//             >
//               Home
//             </NavLink>
//             <NavLink
//               to="/tvShow"
//               className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//             >
//               TvShow
//             </NavLink>
//             <NavLink
//               to="/upcoming"
//               className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//             >
//               Upcoming
//             </NavLink>
//             <NavLink
//               to="/latest"
//               className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//             >
//               Latest
//             </NavLink>
//             <NavLink
//               to="/people"
//               className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
//             >
//               People
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <div className="search-bar-container">
//         <Form className="d-flex justify-content-center my-3" onSubmit={handleSearch}>
//           <Form.Control
//             type="search"
//             placeholder="Search"
//             className="me-2"
//             aria-label="Search"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <Button variant="outline-success" type="submit">Search</Button>
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft:'40px' }}>
//               <h4
//                 style={{
//                   cursor: 'pointer',
//                   color: !isDarkMode ? 'black' : 'white',
//                   fontSize: '24px'
//                 }}
//                 onClick={toggleDarkMode}
//               >
//                 {!isDarkMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i> }
//               </h4>
//             </div>
//         </Form>
//       </div>
//     </>
//   );
// };

// export default NavbarComponent;

import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import the SearchBar component
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
