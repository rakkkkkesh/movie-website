import React, { useEffect, useState } from 'react';
import NavbarComponent from './NavbarComponent';
import CarouselComponent from './CarouselComponent';
import CardComponent from './CardComponent';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../Styles/Home.css';
import SearchBar from './SearchBar';
const Home = ({isDarkMode, toggleDarkMode}) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const searchMovies = async (searchTerm) => {
    if (!searchTerm) {
      setError("Search term is empty");
      setData([]);
      return;
    }
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=7c903f4a54475db1cc80db1ce1b72acb`;
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
      setError(`Error fetching movies: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c903f4a54475db1cc80db1ce1b72acb');
        const data = await res.json();
        setData(data.results);
        setError('');
      } catch (error) {
        setError(`Error fetching popular movies: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
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

      {error && (
        <div className="error-message" style={{ color: 'red', textAlign: 'center'}}>
          {error}
        </div>
      )}
      {loading ? (
    <div className='mainSkeleton'>
        <Skeleton height={600} style={{borderRadius: '10px' }} />
        <div className='crslsubSkeleton'>
            <Skeleton className='crslSkeleton' height={50} width={'30%'} />
            <Skeleton className='crslSkeleton' height={80} width={'100%'} />
            <Skeleton className='crslSkeleton' height={40} width={'10%'} />
        </div>
    </div>
) : (
    <>
        <CarouselComponent data={data} />
        <div className="divider"></div>
    </>
)}
      <h2 className="heading">Popular Movies</h2>
      <div className="heading-line"></div>
      <section className="card-section">
        {loading ? (
          [...Array(10)].map((_, index) => (
            <div key={index} className="card-skeleton">
              <Skeleton height={400} width={'20rem'} style={{ borderRadius: '10px', padding: '0', margin:'0'}} />
              <div className="cardSubSkeleton">
                <Skeleton className='cardSkeleton' height={40} width={'80%'} />
                <Skeleton className='cardSkeleton' height={30} width={'40%'}/>
                <Skeleton className='cardSkeleton' height={30} width={'40%'} />
              </div>
            </div>
          ))
        ) : (
          data && data.map((item) => <CardComponent key={item.id} item={item} isDarkMode={isDarkMode} />)
        )}
      </section>
      <div className="divider"></div>
    </div>
  );
};

export default Home;
