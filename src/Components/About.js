import React from 'react';
import '../Styles/About.css';
import NavbarComponent from './NavbarComponent'
const About = ({search, setSearch, searchMovies, isDarkMode, toggleDarkMode }) => {
  return (
   <>
    <NavbarComponent
    search={search}
    setSearch={(value) => {
      setSearch(value);
      searchMovies(value);
      isDarkMode={isDarkMode};
      toggleDarkMode={toggleDarkMode}
    }}
  />
    <div className={`about-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2 className={`about-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>About Us</h2>
      <p className={`about-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Welcome to our Movie Website! We are dedicated to providing the best movie experience for all movie enthusiasts.
      </p>
      <p className={`about-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Our team is passionate about films and aims to bring you the latest news, reviews, and insights about the movie industry. Whether you are looking for recommendations or want to know more about your favorite actors, we've got you covered.
      </p>
      <h3 className={`sub-heading ${isDarkMode ? 'text-light' : 'text-dark'}`}>Our Features</h3>
      <p className={`about-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Our website includes various components designed to enhance your experience:
      </p>
      <ul className={`features-list ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        <li><strong className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Home Component</strong>: This is the main page where users can explore popular movies.</li>
        <li><strong className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Carousel</strong>: A dynamic display showcasing trending movies to capture your interest.</li>
        <li><strong className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Cards</strong>: Each movie is presented in an attractive card format, providing key information at a glance.</li>
        <li><strong className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>TV Shows</strong>: Stay updated with the latest TV shows, complete with detailed information.</li>
        <li><strong className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>People</strong>: Explore popular actors and filmmakers in the industry.</li>
        <li><strong className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Upcoming Movies</strong>: Get a sneak peek at movies that are set to release soon.</li>
        <li><strong className={`${isDarkMode ? 'text-light' : 'text-dark'}`}>Search Functionality</strong>: Easily search for movies or TV shows based on your interests.</li>
      </ul>
      <p className={`about-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>
        Join us as we explore the world of cinema together. Thank you for visiting our site, and we hope you enjoy your time here!
      </p>
    </div>
   </>
  );
};

export default About;
