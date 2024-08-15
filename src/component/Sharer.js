import React from "react";
import './Rider.css'
import { Link } from "react-router-dom";

const Sharer = () =>{
    return(
<div className="home">
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
                            <Link to="/offer" className="hov">
                           <li>Publish ride</li></Link>
                        </ul>
                        <div className="profile">
                               <Link to="/sharerprofile"> <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="Profile" className="profile-image" />
                               </Link></div>
                    </div>
                </nav>
            </header>
            <div className="container1">
                <div className="content1">
                    <h1 className="title">Welcome!</h1>
                    <p className="description">Join as a ride-sharer</p>
                    <p className="description"> Become a ride sharer and help others get where they need to go while earning rewards. It's a great way to make a difference in your community!</p>
                    <div className="buttons">
                        <Link to="/riderbook">
                            <div className="action-button"><Link to="/offer">Publish a ride</Link></div>
                        </Link>
                    </div>
                </div>
            </div>
</div>
    );
}
export default Sharer;