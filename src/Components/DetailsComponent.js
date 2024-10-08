import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../Styles/DetailsComponent.css';

const DetailsComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showDetails, setShowDetails] = useState(true);
  const [videoKey, setVideoKey] = useState(null);
  const [videoLoading, setVideoLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c903f4a54475db1cc80db1ce1b72acb&append_to_response=videos`);
        if (!res.ok) {
          throw new Error(`Failed to fetch details for ID: ${id}, Status: ${res.status}`);
        }
        const data = await res.json();
        setDetails(data);

        if (data.videos && data.videos.results.length > 0) {
          setVideoKey(data.videos.results[0].key);
        } else {
          setError('No videos found for this title.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  const handleWatchNow = () => {
    if (videoKey) {
      setVideoLoading(true);
      setShowDetails(false);

      setTimeout(() => {
        setVideoLoading(false);
      }, 1000);
    } else {
      setError('No video available for playback.');
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className='skeletonContainer' style={{ padding: '20px', textAlign: 'center' }}>
          <Skeleton height={30} width={'60%'} style={{ marginBottom: '10px' }} />
          <Skeleton className='imgSkeleton' height={400} width={'60%'} />
          <Skeleton height={30} width={'60%'} style={{ marginBottom: '10px' }} />
          <div className='leftSkeleton'>
            <Skeleton height={20} width={'50%'} count={4} />
          </div>
          <div className='skeletonBtnmain'>
            <Skeleton className='skeletonbtn' height={30} width={120} />
            <Skeleton className='skeletonbtn' height={30} width={120} />
          </div>
        </div>
      </div>
    );
  }

  if (videoLoading) {
    return (
      <div className="loading-container">
        <div className='skeletonContainer' style={{ padding: '20px', textAlign: 'center' }}>
          <Skeleton className='imgSkeleton' height={400} width={'60%'} />
          <Skeleton className='skeletonbtn' height={30} width={120} style={{margin:'20px auto'}}/>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div>
      {showDetails && details && (
        <div className="details-container">
          <div className="header">
            <h1 className="details-title">{details.title || details.name}</h1>
          </div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
              alt={details.title || details.name}
              className="details-image"
            />
          </div>
          <div className="details-content">
            <p className="overview">{details.overview}</p>
            <p><strong>Release Date:</strong> {details.release_date || details.first_air_date}</p>
            <p><strong>Rating:</strong> {details.vote_average}⭐</p>
            <p><strong>Genres:</strong> {details.genres.map(genre => genre.name).join(', ')}</p>
            <p><strong>Runtime:</strong> {details.runtime} minutes</p>
            <div className='mainBtn'>
              <button className="watch-now-button" onClick={handleWatchNow}>Watch Now</button>
              <button className="back-button" onClick={() => navigate(-1)}>
                <MdArrowBack size={24} /><span>Back</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {!showDetails && !videoLoading && videoKey && (
        <div className="video-container">
          <iframe
            title="Video Player"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ width: '100%', height: '500px' }}
          ></iframe>
          <button className="close-button" onClick={() => setShowDetails(true)}>
            <MdArrowBack size={24} /><span>Back</span>
          </button>
        </div>
      )}

      {!showDetails && !videoKey && (
        <div className="no-video-container">
          <h2>No video available for this title.</h2>
          <button className="back-button" onClick={() => setShowDetails(true)}>
            <MdArrowBack size={24} /><span>Back to Details</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailsComponent;
