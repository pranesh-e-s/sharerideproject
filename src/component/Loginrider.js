import React, { useState } from 'react';
import { FaRegUserCircle, FaLock } from 'react-icons/fa';
import './Loginrider.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginrider = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const isValidUsername = validateUsername(username);
        const isValidPassword = validatePassword(password);

        if (isValidUsername && isValidPassword) {
            try {
                const response = await axios.post('http://localhost:8080/signup_rider/login', { name: username, password });
                const userId = response.data.id; 
                
                localStorage.setItem('userId', userId);

                toast.success('Login successful!', {
                    onClose: () => navigate('/rider') // Navigate to the rider page
                });
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    setLoginError('Invalid username or password');
                    toast.error('Invalid username or password');
                } else {
                    setLoginError('An error occurred. Please try again later.');
                    toast.error('An error occurred. Please try again later.');
                }
                console.error('Error logging in:', error);
            }
        }
    };

    const validateUsername = (username) => {
        if (username.trim() === '') {
            setUsernameError('Username is required');
            return false;
        }
        setUsernameError('');
        return true;
    };

    const validatePassword = (password) => {
        if (password.trim() === '') {
            setPasswordError('Password is required');
            return false;
        }
        setPasswordError('');
        return true;
    };

    return (
        <div className="unique-login-container">
            <div className="unique-login-box">
                <h2 className="unique-login-title">Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="unique-input-group">
                        <FaRegUserCircle className="unique-icon" />
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    {usernameError && <div className="unique-error-message">{usernameError}</div>}
                    <div className="unique-input-group">
                        <FaLock className="unique-icon" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {passwordError && <div className="unique-error-message">{passwordError}</div>}
                    <div className="unique-forgot-password">
                        <Link to="/forgotpassrider">Forgot Password?</Link>
                    </div>
                    {loginError && <div className="unique-error-message">{loginError}</div>}
                    <button type="submit" className="unique-login-button">Login</button>
                </form>
                <div className="unique-signup-link">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
                <div className="unique-terms-policy">
                    <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Loginrider;
