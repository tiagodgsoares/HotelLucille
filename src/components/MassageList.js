import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Carousel from 'react-bootstrap/Carousel';
import massagesData from '../data/massages';
import { Link } from 'react-router-dom';

const MassageList = () => (
    <div className="drink-snack-container">
        <div className="bar-link">
            <button type="button" class="btn btn-outline-light">
                <Link to="/Spa">
                    <img src={process.env.PUBLIC_URL + '/spa_brown_small.png'} alt="lucille" />
                </Link>
            </button>
        </div>
        <div className="drink-snack-title">
            <img src={process.env.PUBLIC_URL + '/massage_selection.png'} alt="lucille" />
        </div>
        <Carousel>
            {massagesData.map((massage) => (
                <Carousel.Item key={massage.name}>
                    <div key={massage.name} className="massage" style={snackStyle}>
                        <h2>{massage.name}</h2>
                        <p>{massage.description}</p>
                        <p>€{massage.price}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
);

const snackStyle = {
    padding: '10px',
    textAlign: 'center',
};

/* const imageStyle = {
    maxWidth: '15%',
    height: 'auto',
}; */

export default MassageList;
