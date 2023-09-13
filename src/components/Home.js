import React, { useEffect, useState } from 'react';
import LoopingAudio from './LoopingAudio';
import './index.css';
import { Link } from 'react-router-dom';

function Home() {
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
        setAnimationActive(true);
    }, []);
    return (
        <div className="container">
            <div className="background-image">
                <img src={process.env.PUBLIC_URL + '/lobby.jpg'} alt="Background" />
            </div>
            <div className={`content-container ${animationActive ? 'active' : ''}`}>
                <div className="centered-word">
                    <img src={process.env.PUBLIC_URL + '/lucille_word.png'} alt="lucille" />
                </div>
                <div className="link">
                    <button type="button" class="btn btn-outline-light">
                        <Link to="/Bar">
                            <img
                                src={process.env.PUBLIC_URL + '/bar_word_small.png'}
                                alt="lucille"
                            />
                        </Link>
                    </button>
                </div>
                <div className="link">
                    <button type="button" class="btn btn-outline-light">
                        <Link to="/Concierge">
                            <img
                                src={process.env.PUBLIC_URL + '/concierge_word_small.png'}
                                alt="lucille"
                            />
                        </Link>
                    </button>
                </div>
                <div className="link">
                    <button type="button" class="btn btn-outline-light">
                        <Link to="/Spa">
                            <img
                                src={process.env.PUBLIC_URL + '/spa_word_small.png'}
                                alt="lucille"
                            />
                        </Link>
                    </button>
                </div>
            </div>
            <LoopingAudio />
        </div>
    );
}

export default Home;
