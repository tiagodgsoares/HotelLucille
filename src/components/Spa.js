import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Spa() {
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
        setAnimationActive(true);
    }, []);
    return (
        <div className={`bar-container ${animationActive ? 'active' : ''}`}>
            <div className="home-link">
                <button type="button" class="btn btn-outline-light">
                    <Link to="/">
                        <img
                            src={process.env.PUBLIC_URL + '/lucille_word_small.png'}
                            alt="lucille"
                        />
                    </Link>
                </button>
            </div>
            <div className="background-image">
                <img src={process.env.PUBLIC_URL + '/spa.jpg'} alt="Background" />
            </div>
            <div className="centered-word">
                <img src={process.env.PUBLIC_URL + '/spa_word.png'} alt="lucille" />
            </div>
            <div className="link">
                <button type="button" class="btn btn-outline-light">
                    <Link to="/Massage">
                        <img src={process.env.PUBLIC_URL + '/massage_menu.png'} alt="lucille" />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Spa;
