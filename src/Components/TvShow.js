import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import CarouselComponent from './CarouselComponent';
import CardComponent from './CardComponent';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SearchBar from './SearchBar';

const TvShow = ({isDarkMode, toggleDarkMode}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const searchTvShows = async (searchTerm) => {
    if (!searchTerm) {
      setError("Search term is empty");
      setData([]); // Clear previous results
      return;
    }
    setLoading(true); // Set loading state
    try {
      const url = `https://api.themoviedb.org/3/search/tv?query=${searchTerm}&api_key=7c903f4a54475db1cc80db1ce1b72acb`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.results.length === 0) {
        setError("No TV Shows Found");
      } else {
        setError('');
        setData(data.results);
      }
    } catch (error) {
      setError("Error fetching TV shows: " + error.message);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  useEffect(() => {
    const fetchPopularTvShows = async () => {
      setLoading(true); // Set loading state
      try {
        const res = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=7c903f4a54475db1cc80db1ce1b72acb');
        const data = await res.json();
        setData(data.results);
        setError('');
      } catch (error) {
        setError("Error fetching popular TV shows: " + error.message);
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchPopularTvShows();
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
          searchTvShows(value); 
        }}
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
      />

      {error && <div className="error-message" style={{ color: 'red', textAlign: 'center' }}>{error}</div>}

      {/* Display skeleton for carousel while loading */}
      {loading ? (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <Skeleton height={400} count={1} style={{ marginBottom: '20px' }} />
        </div>
      ) : (
        <CarouselComponent data={data} />
      )}

      <div className="divider"></div>
      <h2 className='heading'>Popular TV Shows</h2>
      <div className="heading-line"></div>
      <section className="card-section">
        {loading ? (
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
          data && data.map((item) => <CardComponent key={item.id} item={item} />)
        )}
      </section>
      <div className="divider"></div>
    </div>
  );
};

export default TvShow;
