import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; 

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <h3 className="signup-option" onClick={() => navigate('/loginrider')}>
                Login as a rider <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
            <br></br>
            <h3 className="signup-or">or</h3>
            <br></br>
            <h3 className="signup-option" onClick={() => navigate('/loginridesharer')}>
                Login as a ride sharer <span className="arrow">→</span>
                <div className="underline"></div>
            </h3>
        </div>
    );
}

export default Login;
