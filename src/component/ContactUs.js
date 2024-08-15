import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
    const navigate = useNavigate();

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
                            <li onClick={() => navigate("/home")}>Home</li>
                            <li onClick={() => navigate("/aboutus")}>About</li>
                            
                            <li className="active" onClick={() => navigate("/")}>Contact us</li>
                        </ul>
                        <div className="auth-buttons">
                            <button className="action-button" onClick={() => navigate("/login")}>Login</button>
                            <button className="action-button" onClick={() => navigate("/signup")}>Signup</button>
                        </div>
                    </div>
                </nav>
            </header>
                  <div className="contact-container">
            <div className="contact-header">
                <h1 className="contact-title">REACH US, WE ARE HERE TO <br/>HELP YOU</h1>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6w8nUDn1n3rhLh-9hnvKUNSARyPltCrgmJYqsBYsdH1TGEzm_nOrhvmXMkp3o_s8F8g&usqp=CAU" alt="Background" className="contact-image" />
            </div>
            <div className="contact-details">
                <div className="contact-item">
                    <span className="icon">📞</span>
                    <p>We'd love to hear from you. Please make a call to this number - <span className="highlight">0422 4567890</span></p>
                </div>
                <div className="contact-item">
                    <span className="icon">📧</span>
                    <p>Please send us an e-mail for below id, we will quickly get back to you - <span className="highlight">info@shareride.co.in</span></p>
                </div>
                <div className="contact-item">
                    <span className="icon">📧</span>
                    <p>To address your complaint/grievance, mail us at <span className="highlight">customersupport@shareride.co.in</span> and help us to serve you better</p>
                </div>
            </div>
 </div>
 </div>
    );
}

export default ContactUs;
