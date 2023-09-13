import React from 'react';

import { Link } from 'react-router-dom';

const Itinerary = () => {
    return (
        <div class="itinerary">
            <div className="bar-link">
                <button type="button" class="btn btn-outline-light">
                    <Link to="/Concierge">
                        <img
                            src={process.env.PUBLIC_URL + '/concierge_word_small.png'}
                            alt="lucille"
                        />
                    </Link>
                </button>
            </div>
            <div className="description">
                <h1>Mississippi Musical and Cultural History Exploration</h1>

                <div class="itinerary-section">
                    <h2>8 AM: Start in Clarksdale</h2>
                    <ul>
                        <li>
                            Begin your day in Clarksdale, often referred to as the "Birthplace of
                            the Blues."
                        </li>
                        <li>
                            Visit the Delta Blues Museum to learn about the history of blues music,
                            featuring exhibits on legendary artists like Muddy Waters, John Lee
                            Hooker, and B.B. King.
                        </li>
                        <li>
                            Explore Ground Zero Blues Club, a renowned blues venue co-owned by
                            Morgan Freeman, where you can enjoy live music and a Southern-style
                            breakfast.
                        </li>
                    </ul>
                </div>

                <div class="itinerary-section">
                    <h2>11 AM: Drive to Indianola</h2>
                    <ul>
                        <li>Head south to Indianola, the hometown of B.B. King.</li>
                        <li>
                            Visit the B.B. King Museum and Delta Interpretive Center to delve into
                            the life and legacy of the "King of the Blues." The museum showcases
                            B.B. King's personal artifacts, guitars, and interactive exhibits.
                        </li>
                    </ul>
                </div>

                <div class="itinerary-section">
                    <h2>1:30 PM: Lunch at Doe's Eat Place</h2>
                    <ul>
                        <li>
                            Enjoy a classic Southern lunch at Doe's Eat Place in Greenville, a
                            historic restaurant known for its tamales, steaks, and welcoming
                            ambiance.
                        </li>
                    </ul>
                </div>

                <div class="itinerary-section">
                    <h2>3 PM: Travel to Jackson</h2>
                    <ul>
                        <li>
                            Drive to Jackson, the capital city of Mississippi, which played a
                            significant role in the Civil Rights Movement.
                        </li>
                        <li>
                            Visit the Mississippi Civil Rights Museum and the Museum of Mississippi
                            History to gain insights into the state's complex history.
                        </li>
                    </ul>
                </div>

                <div class="itinerary-section">
                    <h2>6 PM: Tour Jackson's Music Heritage</h2>
                    <ul>
                        <li>
                            Explore the Farish Street Historical District, once a thriving hub for
                            African American music and culture. Though it has seen better days, you
                            can still glimpse the past through historic buildings and markers.
                        </li>
                    </ul>
                </div>

                <div class="itinerary-section">
                    <h2>8:30 PM: Dinner and Music in Jackson</h2>
                    <ul>
                        <li>
                            Enjoy dinner at a local eatery like The Iron Horse Grill, a restaurant
                            that celebrates Mississippi's music history.
                        </li>
                        <li>
                            Wrap up your day with live music at a local blues or jazz venue like
                            Underground 119 or Hal & Mal's. Immerse yourself in the local music
                            scene and let the rhythms of Mississippi carry you away.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Itinerary;
