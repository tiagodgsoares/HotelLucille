import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import snacksData from '../data/snacks';
import { Link } from 'react-router-dom';

function SnackList() {
    return (
        <div className="drink-snack-container">
            <div className="bar-link">
                <button type="button" class="btn btn-outline-light">
                    <Link to="/Bar">
                        <img src={process.env.PUBLIC_URL + '/bar_word_small.png'} alt="lucille" />
                    </Link>
                </button>
            </div>
            <div className="drink-snack-title">
                <img src={process.env.PUBLIC_URL + '/snack_selection.png'} alt="lucille" />
            </div>
            <Carousel>
                {snacksData.map((snack) => (
                    <Carousel.Item key={snack.name} className="snack" style={snackStyle}>
                        <br />
                        <br />
                        <img src={snack.image} alt={snack.name} style={imageStyle} />
                        <br />
                        <br />
                        <h2>{snack.name}</h2>

                        {snack.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                        <br />
                        <br />

                        <p>€{snack.price}</p>
                        <br />
                        <br />
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

const snackStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '10px',
};

const imageStyle = {
    maxWidth: '15%',
    height: 'auto',
};

export default SnackList;
