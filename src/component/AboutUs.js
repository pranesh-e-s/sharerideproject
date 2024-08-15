import React from "react";
import './AboutUs.css';
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();
    return (
        <div className="about-page">
              <header className="navbar">
                <nav className="navbar-content">
                    <div className="navbar-left">
                        <img src="https://img.freepik.com/premium-vector/ride-sharing-logo-design-vector-illustration-symbol-template-flat-style_1147484-7125.jpg" alt="Logo" className="logoImage" />
                        <b>ShareRide</b>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li onClick={() => navigate("/home")}>Home</li>
                            <li className="active" onClick={() => navigate("/")}>About Us</li>
                            <li onClick={() => navigate("/contactus")}>Contact Us</li>
                        </ul>
                        <div className="auth-buttons">
                            <button className="action-button" onClick={() => navigate("/login")}>Login</button>
                            <button className="action-button" onClick={() => navigate("/signup")}>Signup</button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h1>India's Beloved Ride Sharing Service</h1>
                        <p><b>We are not an option, we are a choice</b></p>
                        <p>
                            We're the #1 choice of millions of people because we're the solution <br/><br></br>to India's intra-city commuting problems. 
                            With assured safety, we <br></br><br></br>also provide economically priced rides.
                        </p>
                        <b>
                        <p>What makes us different?</p></b>
                        <p>
                            Our ride-sharing service can dodge the traffic during peak hours and<br></br> <br></br>get you to your destination in a jiffy!
                            So when you think travel, think <br></br><br></br>ShareRide.
                        </p>
                    </div>
                    <div className="about-image-container">
                        <img src="https://thumbs.dreamstime.com/b/ride-share-taxi-service-smartphone-screen-ride-share-taxi-service-smartphone-screen-online-rideshare-app-carpool-mobile-109924359.jpg" alt="About Us" className="about-image" />
                    </div>
                </div>
            </div>
            <div className="impact-section">
                <h2>Our Impact</h2>
                <p>
                    Our presence in the country has changed the concept of intra-city travel and made last-mile connectivity affordable for all.
                </p>
                <div className="impact-stats">
                  
                    <div className="stat">
                        <p><strong>100 +</strong> Cities</p>
                    </div>
                    <div className="stat">
                        <p><strong>1 + M</strong> RideSharers</p>
                    </div>
                    <div className="stat">
                        <p><strong>10 + M</strong> Customers</p>
                    </div>
                </div>
            </div>
            <footer>
            </footer>
        </div>
    );
}

export default AboutUs;
