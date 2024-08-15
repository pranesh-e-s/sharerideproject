import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Ensure you have a CSS file for styling

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <h3 className="signup-option" onClick={() => navigate('/signuprider')}>
                Sign up as a rider <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
            <br></br>
            <h3 className="signup-or">or</h3>
            <br></br>
            <h3 className="signup-option" onClick={() => navigate('/signupridesharer')}>
                Sign up as a ride sharer <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
        </div>
    );
}

export default SignUp;
