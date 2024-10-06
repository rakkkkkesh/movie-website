import React from 'react';
import '../Styles/PersonCard.css';

const PersonCard = ({ person }) => {
  return (
    <div className="person-card">
      <img src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`} alt={person.name} />
      <div className="overlay">
        <div className="person-card-content">
          <h4>{person.name}</h4>
          <p>Popularity: {person.popularity}⭐</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
