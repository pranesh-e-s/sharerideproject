import React, { useState } from 'react';
import { FaRegUserCircle, FaPhoneAlt, FaLock } from 'react-icons/fa';
import './forgotpass.css'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasssharer = () => {
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/signupridesharer/forgot_password', {
                name: username,
                phoneNumber: phoneNumber,
                newPassword: newPassword
            });
            toast.success(response.data);
        } catch (error) {
            setError('Error resetting password');
            toast.error('Error resetting password');
        }
    };

    return (
        <div className="forgot-password-container">
            <form onSubmit={handlePasswordReset}>
                <h2>FORGOT PASSWORD</h2>
                <div className="input-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Phone Number</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>New Password</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className='but'>Reset Password</button>
            </form>
            <ToastContainer />
        </div>
    );
};
export default ForgotPasssharer;
