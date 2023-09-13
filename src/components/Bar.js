import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Bar() {
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
            <div className="video-and-background">
                <div className="background-image">
                    <img src={process.env.PUBLIC_URL + '/bar.jpg'} alt="Background" />
                </div>
                <div className="video-all">
                    <div className="video-container">
                        <video width="200" height="200" controls autoPlay muted>
                            <source
                                src={
                                    process.env.PUBLIC_URL +
                                    '/B.B. King - The Thrill Is Gone ft. Tracy Chapman.mp4'
                                }
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="video-container">
                        <video width="200" height="200" controls autoPlay muted>
                            <source
                                src={
                                    process.env.PUBLIC_URL +
                                    '/B.B. King - The Thrill Is Gone ft. Tracy Chapman.mp4'
                                }
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="video-container">
                        <video width="200" height="200" controls autoPlay muted>
                            <source
                                src={
                                    process.env.PUBLIC_URL +
                                    '/B.B. King - The Thrill Is Gone ft. Tracy Chapman.mp4'
                                }
                                type="video/mp4"
                            />
                        </video>
                    </div>
                    <div className="video-container">
                        <video width="200" height="200" controls autoPlay muted>
                            <source
                                src={
                                    process.env.PUBLIC_URL +
                                    '/B.B. King - The Thrill Is Gone ft. Tracy Chapman.mp4'
                                }
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </div>
            </div>
            <div className="centered-word">
                <img src={process.env.PUBLIC_URL + '/bar_word.png'} alt="lucille" />
            </div>
            <div className="link">
                <button type="button" class="btn btn-outline-light active">
                    <Link to="/Drinks">
                        <img src={process.env.PUBLIC_URL + '/drink_menu.png'} alt="lucille" />
                    </Link>
                </button>
            </div>
            <div className="link">
                <button type="button" class="btn btn-outline-light active">
                    <Link to="/Snacks">
                        <img src={process.env.PUBLIC_URL + '/snack_menu.png'} alt="lucille" />
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default Bar;
