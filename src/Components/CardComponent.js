import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import "../Styles/CardComponent.css";

const CardComponent = ({ item, isDarkMode }) => {
    // Determine title based on the type of content
    let title = item.original_title || item.name || "Title Not Available"; // Fallback if neither exists

    return (
        <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="card-wrapper"
        >
            <Card className={`card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <Link to={`/details/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Img 
                        variant="top" 
                        className="card-img-top" 
                        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} 
                    />
                    <Card.Body className="card-body">
                        <div className="text-overlay">
                            <Card.Title className={`card-title ${isDarkMode ? 'text-light' : 'text-dark'}`}>{title}</Card.Title>
                            <Card.Text className={`card-text ${isDarkMode ? 'text-light' : 'text-dark'}`}>{item.vote_average}⭐</Card.Text>
                            <Button className="button" variant={isDarkMode ? 'light' : 'primary'}>See Details</Button>
                        </div>
                    </Card.Body>
                </Link>
            </Card>
        </motion.div>
    );
};

export default CardComponent;
