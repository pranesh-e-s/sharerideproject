import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import SignUp from './SignUp';
import Signupridesharer from './Signupridesharer';
import Signuprider from './Signuprider';

const Home = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('riders');
    const [changingText, setChangingText] = useState('interviewees');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const texts = ['visitors', 'interviewees', 'job seekers', 'patients', 'prospects'];
        let index = 0;
        const interval = setInterval(() => {
            setChangingText(texts[index]);
            index = (index + 1) % texts.length;
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <header className="navbar">
                <nav className="navbar-content">
                    <div className="navbar-left">
                        <img src="https://img.freepik.com/premium-vector/ride-sharing-logo-design-vector-illustration-symbol-template-flat-style_1147484-7125.jpg" alt="Logo" className="logoImage" />
                        <b>ShareRide</b>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li className="active" onClick={() => navigate("/")}>Home</li>
                            <li onClick={() => navigate("/aboutus")}>About Us</li>
                            <li onClick={() => navigate("/contactus")}>Contact Us</li>
                        </ul>
                        <div className="auth-buttons">
                            <button className="action-button" onClick={() => navigate("/login")}>Login</button>
                            <button className="action-button" onClick={() => navigate("/signup")}>Signup</button>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="main-section">
                <div className="text-section">
                    <h1 className="main-title">India’s Beloved Ride Sharing Service</h1>
                    <p className="main-description">
                        Shareride is India's first and fastest-growing ride-sharing app with a<br /><br /> whopping number of app downloads.
                        We are now running operations in<br /><br /> more than 100 cities.<br /><br />
                    </p>
                    <div className="button-section">
                        <button className="btn-signin-ride" onClick={() => navigate("/signuprider")}>Sign in to Ride</button>
                        <button className="btn-signin-offer" onClick={() => navigate("/signupridesharer")}>Sign in to Offer the ride</button>
                    </div>
                </div>
                <div className="images-section">
                    <div className="image-wrapper">
                        <img src="https://wesavelives.org/wp-content/uploads/2024/01/5.jpg" alt="Ride Sharing" className="image" />
                    </div>
                </div>
                <br /><br />
            </div>
            <h2 className="heading">What's in it for you</h2>
            <div className="tabs1">
                <button className={`tab ${activeTab === 'riders' ? 'active' : 'inactive'}`} onClick={() => handleTabClick('riders')}><b>Riders</b></button>
                <button className={`tab ${activeTab === 'rideSharers' ? 'active' : 'inactive'}`} onClick={() => handleTabClick('rideSharers')}><b>Ride Sharers</b></button>
            </div>
            {activeTab === 'riders' && (
                <div className="features">
                    <div className="feature">
                        <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTce68Dy0kuB7FLrRR55_fbWZ8iCtHnQ_v15AsFDgUA5KQnlF8o" alt="Doorstep Pick-Up" />
                        <h3>Doorstep Pick-Up</h3>
                        <p>We will pick you up from where you are and drop you exactly where you need to be.</p>
                    </div>
                    <div className="feature">
                        <img src="https://www.shutterstock.com/image-vector/affordable-rubber-stamp-260nw-769527106.jpg" alt="Affordability" />
                        <h3>Affordability</h3>
                        <p>No more latent prices and shocked reactions after seeing the final ride cost. We're here with the most affordable rides for all.</p>
                    </div>
                    <div className="feature">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL175n8brQ7gqI4WYLZrsvTZZxnm6W3j7e5A&s" alt="Quick Ride" />
                        <h3>Quick Ride</h3>
                        <p>Trend setters of smart commute be it traffic or rush hours.</p>
                    </div>
                </div>
            )}
            {activeTab === 'rideSharers' && (
                <div className="features">
                    <div className="feature">
                        <img src="https://via.placeholder.com/150" alt="Flexible Rides" />
                        <h3>Flexible Rides</h3>
                        <p>Drive at your convenience without hampering your daily activities. Choose when to take your next ride.</p>
                    </div>
                    <div className="feature">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLn7OPlBi6eAwIhuU4mNinqgy7yd-7u1jJuUmvjm7DyTKLoPWWUdAw9Mek5Gs7gAs-qzI&usqp=CAU" alt="Redeemable Earnings" />
                        <h3>Redeemable Earnings</h3>
                        <p>Transfer your earnings from the Shareride wallet to your bank account anytime.</p>
                    </div>
                    <div className="feature">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5T5O6iyY4vLfVhSI8msmMOsSZwQTx5Nbxkv0xii9pYQPPeK-UG7oZQMvu8UWSYvuq3v8&usqp=CAU" alt="Insured Rides" />
                        <h3>Insured Rides</h3>
                        <p>All rides are insured with coverage up to Rs 5 Lakh for accidents and medical benefits.</p>
                    </div>
                </div>
            )}
            <div className="changing-text-section">
                <h2 className="shareride-title">ShareRide</h2>
                <h3 className="help-move-title">We help you move to <br/><br/> <span className="changing-text">{changingText}</span></h3>
                <p className="quote">Enjoy affordable rides, reliable service, and the convenience of doorstep pick-up with ShareRide. <br/><br/>
        Whether you're commuting to work, heading to an appointment, or just exploring the city, ShareRide ensures a comfortable and timely journey. <br/><br/>
        With our extensive coverage across more than 100 cities, your next ride is just a tap away.</p>
            </div>
        </div>
    );
}

export default Home;
