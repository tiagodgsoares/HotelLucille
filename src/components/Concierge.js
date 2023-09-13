import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Concierge() {
    const [animationActive, setAnimationActive] = useState(false);

    useEffect(() => {
        setAnimationActive(true);
    }, []);

    const openNonReactProject = () => {
        // Replace 'path-to-non-react-project' with the actual URL or path to your non-React project's HTML file.
        const nonReactProjectURL = 'http://127.0.0.1:5500/quiz.html';
        window.open(nonReactProjectURL, '_blank');
    };
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
                <img src={process.env.PUBLIC_URL + '/concierge.jpg'} alt="Background" />
            </div>
            <div className="centered-word">
                <img src={process.env.PUBLIC_URL + '/concierge_word.png'} alt="lucille" />
            </div>
            <div className="link">
                <button type="button" class="btn btn-outline-light" onClick={openNonReactProject}>
                    <Link to="/Concierge">
                        <img src={process.env.PUBLIC_URL + '/quiz_icon.png'} alt="lucille" />
                    </Link>
                </button>
            </div>
            <div className="link">
                <button type="button" class="btn btn-outline-light">
                    <Link to="/Itinerary">
                        <img src={process.env.PUBLIC_URL + '/itineray_icon.png'} alt="lucille" />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Concierge;
