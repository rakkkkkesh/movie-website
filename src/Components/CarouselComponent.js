import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel'; // Named import for Carousel
import { motion } from 'framer-motion'; // Import motion from framer-motion
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Carousel CSS
import "../Styles/CarouselComponent.css";

const CarouselComponent = ({ data, handleClick }) => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={700}
        emulateTouch={true}
        swipeable={true}
        showThumbs={false} // Disable thumbnails
      >
        {data && data.map((item) => {
          let title;
          if (item.original_title) {
            title = item.original_title; // For movies
          } else if (item.name) {
            title = item.name; // For TV shows
          } else {
            title = "Title Not Available"; // Fallback
          }

          return (
            <Link 
              key={item.id} 
              to={`/details/${item.id}`} 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <motion.div
                className="carousel-container"
                initial={{ scale: 0.8 }} // Start scaled down
                whileInView={{ scale: 1 }} // Scale to normal when in view
                exit={{ scale: 0.8 }} // Scale down when exiting
                transition={{ duration: 0.5, ease: "easeOut" }} // Duration and easing
                viewport={{ once: false, amount: 0.5 }} // Trigger multiple times, at 50% view
              >
                <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={title} />
                <div className="legend">
                  <h1>{title}</h1>
                  <p>{item.overview}</p>
                  <p>{item.vote_average}⭐</p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
