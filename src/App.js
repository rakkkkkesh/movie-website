import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home';
import TvShow from './Components/TvShow';
import Upcoming from './Components/Upcoming';
import Latest from './Components/Latest';
import People from './Components/People';
import DetailsComponent from './Components/DetailsComponent';
import About from './Components/About';
import PrivacyPolicy from './Components/PrivacyPolicy';
import ContactForm from './Components/ContactForm';
import FooterComponent from './Components/FooterComponent';
import NotFound from './Components/NotFound';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Apply dark mode to the body
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/tvShow" element={<TvShow isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/upcoming" element={<Upcoming isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/latest" element={<Latest isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/people" element={<People isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path="/details/:id" element={<DetailsComponent />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy isDarkMode={isDarkMode} />} />
          <Route path="/contactform" element={<ContactForm isDarkMode={isDarkMode} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
          <FooterComponent />
      </Router>
    </>
  );
};

export default App;
