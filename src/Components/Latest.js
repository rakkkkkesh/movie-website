import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import CardComponent from './CardComponent';
import CarouselComponent from './CarouselComponent';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SearchBar from './SearchBar';

const Latest = ({isDarkMode, toggleDarkMode}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState('');

  const searchMovies = async (e) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=7c903f4a54475db1cc80db1ce1b72acb`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.results.length === 0) {
        setError("No Movies Found");
        setData([]);
      } else {
        setError('');
        setData(data.results);
      }
    } catch (error) {
      setError("Error fetching movies: " + error.message);
    }
  };

  useEffect(() => {
    const fetchLatestMovie = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/latest?api_key=7c903f4a54475db1cc80db1ce1b72acb');
        
        if (!res.ok) throw new Error('Error fetching latest movie'); // Throw error if response is not ok
        
        const data = await res.json();
        setData([data]);
        setError('');
      } catch (error) {
        console.error(error);
        setError("Error fetching latest movie: " + error.message); // Set error message to state
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchLatestMovie();
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
          searchMovies(value); 
        }}
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
      />

      {error && <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

      {/* Show skeleton for carousel while loading */}
      {loading ? (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Skeleton height={400} count={1} />
        </div>
      ) : (
        <CarouselComponent data={data} />
      )}
      
      <h2 className='heading'>Latest Movie</h2>
      <div className="heading-line"></div>
      <section style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {loading ? (
          // Display skeletons for cards while loading
          [...Array(1)].map((_, index) => (
            <Skeleton
              key={index}
              height={300}
              width={200}
              className="card-skeleton"
              style={{ borderRadius: '10px', margin: '20px' }} // Custom styling for cards
            />
          ))
        ) : (
          data && data.map((item) => <CardComponent key={item.id} item={item} />)
        )}
      </section>
      <div className="divider"></div>
    </div>
  );
};

export default Latest;
