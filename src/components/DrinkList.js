import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import drinksData from '../data/drinks';
import { Link } from 'react-router-dom';

function DrinkList() {
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
                <img src={process.env.PUBLIC_URL + '/drink_selection.png'} alt="lucille" />
            </div>

            <Carousel>
                {drinksData.map((drink) => (
                    <Carousel.Item key={drink.name}>
                        <div className="drink" style={drinkStyle}>
                            <br />
                            <br />
                            <img src={drink.image} alt={drink.name} style={imageStyle} />
                            <br />
                            <br />
                            <h2>{drink.name}</h2>
                            <p>{drink.ingredients}</p>
                            <p>€{drink.price}</p>
                            <br />
                            <br />
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

const drinkStyle = {
    padding: '10px',
    textAlign: 'center',
};

const imageStyle = {
    maxWidth: '30%',
    height: 'auto',
};

export default DrinkList;
