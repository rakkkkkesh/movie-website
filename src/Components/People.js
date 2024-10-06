import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import PersonCard from './PersonCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import "../Styles/People.css";
import SearchBar from './SearchBar';

const People = ({isDarkMode, toggleDarkMode}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState('');

  const searchPeople = async (searchTerm) => {
    if (!searchTerm) {
      setError('');
      return;
    }

    try {
      const url = `https://api.themoviedb.org/3/search/person?query=${searchTerm}&api_key=7c903f4a54475db1cc80db1ce1b72acb`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.results.length === 0) {
        setError("No People Found");
        setData([]);
      } else {
        setError('');
        setData(data.results);
      }
    } catch (error) {
      console.error(error);
      setError("Error fetching people: " + error.message);
    }
  };

  useEffect(() => {
    const fetchPopularPeople = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const res = await fetch('https://api.themoviedb.org/3/person/popular?api_key=7c903f4a54475db1cc80db1ce1b72acb');
        const data = await res.json();
        setData(data.results);
        setError('');
      } catch (error) {
        console.error(error);
        setError("Error fetching popular people: " + error.message);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchPopularPeople();
  }, []);

  return (
    <div>
     <NavbarComponent 
       isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}/>
      <SearchBar
        search={search}
        setSearch={(value) => {
          setSearch(value);
          searchPeople(value); 
        }}
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      {error && <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

      <h2 className='heading'>Popular People</h2>
      <div className="heading-line"></div>
      <div className='people-container'>
        {loading ? (
          // Display skeletons for person cards while loading
          [...Array(10)].map((_, index) => (
            <Skeleton
              key={index}
              height={300}
              width={200}
              className="card-skeleton"
              style={{ borderRadius: '10px', margin: '20px' }} // Custom styling for cards
            />
          ))
        ) : (
          data && data.map((person) => <PersonCard key={person.id} person={person} />)
        )}
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default People;
