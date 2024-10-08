import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
        showThumbs={true}
      >
        {data && data.map((item) => {
          let title;
          if (item.original_title) {
            title = item.original_title;
          } else if (item.name) {
            title = item.name;
          } else {
            title = "Title Not Available";
          }

          return (
            <Link
              key={item.id}
              to={`/details/${item.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <motion.div
                className="carousel-container"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: false, amount: 0.5 }}
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
