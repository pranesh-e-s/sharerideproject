// import React, { useState } from 'react';
// import { FaRegUserCircle, FaLock } from 'react-icons/fa';
// import './Loginrider.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Loginridesharer = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [usernameError, setUsernameError] = useState('');
//     const [passwordError, setPasswordError] = useState('');

//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         const isValidUsername = validateUsername(username);
//         const isValidPassword = validatePassword(password);
//         if (isValidUsername && isValidPassword) {
//             try {
//                     const response = await axios.post('http://localhost:8080/signupridesharer/login', { name: username, password });
//                     console.log('Response:', response.data);
//                     toast.success('Login successful!', {
//                         onClose: () => navigate('/offer')
//                 });
//             } catch (error) {
//                 toast.error('Login failed: Invalid credentials');
//             }
//         }
//     };

//     const validateUsername = (username) => {
//         if (username.trim() === '') {
//             setUsernameError('Username is required');
//             return false;
//         }
//         setUsernameError('');
//         return true;
//     };

//     const validatePassword = (password) => {
//         if (password.trim() === '') {
//             setPasswordError('Password is required');
//             return false;
//         }
//         setPasswordError('');
//         return true;
//     };

//     return (
//         <div className="unique-login-container">
//             <div className="unique-login-box">
//                 <h2 className="unique-login-title">Login</h2>
//                 <form onSubmit={handleLogin}>
//                     <div className="unique-input-group">
//                         <FaRegUserCircle className="unique-icon" />
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             value={username}
//                             onChange={(e) => setUsername(e.target.value)}
//                         />
//                     </div>
//                     {usernameError && <div className="unique-error-message">{usernameError}</div>}
//                     <div className="unique-input-group">
//                         <FaLock className="unique-icon" />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     {passwordError && <div className="unique-error-message">{passwordError}</div>}
//                     <div className="unique-forgot-password">
//                         <a href="#">Forgot Password?</a>
//                     </div>
//                     <button type="submit" className="unique-login-button">Login</button>
//                 </form>
//                 <div className="unique-signup-link">
//                     Don't have an account? <Link to="/signup">Sign Up</Link>
//                 </div>
//                 <div className="unique-terms-policy">
//                     <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
//                 </div>
//             </div>
//             <ToastContainer /> 
//         </div>
//     );
// };

// export default Loginridesharer;

import React, { useState } from 'react';
import { FaRegUserCircle, FaLock } from 'react-icons/fa';
import './Loginrider.css'; // Ensure to create this CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loginridesharer = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const isValidUsername = validateUsername(username);
        const isValidPassword = validatePassword(password);

        if (isValidUsername && isValidPassword) {
            try {
                const response = await axios.post('http://localhost:8080/signupridesharer/login', { name: username, password });
                const userId = response.data.id;

                localStorage.setItem('userId', userId);

                toast.success('Login successful!', {
                    onClose: () => navigate('/sharer') 
                });
            } catch (error) {
                toast.error('Login failed: Invalid credentials or server error');
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
                        <Link to="/forgotpasssharer">Forgot Password?</Link>
                    </div>
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

export default Loginridesharer;
