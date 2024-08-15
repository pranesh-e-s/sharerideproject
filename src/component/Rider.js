import React from 'react';
import "./Rider.css"
import { Link } from 'react-router-dom';

const Rider = () => {
    return (
        <div className='home'>
            <header className="navbar">
                <nav className="navbar-content">
                    <div className="navbar-left">
                        <img 
                            src="https://img.freepik.com/premium-vector/ride-sharing-logo-design-vector-illustration-symbol-template-flat-style_1147484-7125.jpg" 
                            alt="Logo" 
                            className="logoImage" 
                        />
                        <b>ShareRide</b>
                    </div>
                    <div className="navbar-right">
                        <ul>
                            <li className='hov'>
                                <Link to="/riderhistory">View ride History</Link></li>
                            <li className='hov'>
                                <Link to="/riderbook">Book ride</Link>
                            </li>
                        </ul>
                        <div className="profile">
                            <Link to="/riderprofile">
                                <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="Profile" className="profile-image" />
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container1">
                <div className="content1">
                    <h1 className="title">Welcome!</h1>
                    <p className="description">Join our reliable ride-sharing service</p>
                    <p className="description"> Whether you need a ride or are looking to book one, we have you covered.</p>
                    <div className="buttons">
                        <Link to="/riderbook">
                            <div className="action-button">Book a Ride</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rider;
