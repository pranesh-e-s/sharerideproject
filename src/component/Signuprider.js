import React, { useState } from 'react';
import axios from 'axios';
import { FaRegUserCircle, FaLock, FaPhone, FaAddressCard, FaIdCard, FaIdCardAlt } from 'react-icons/fa';
import './Signuprider.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Signuprider = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        gender: '',
        phone: '',
        address: '',
        aadhar: '',
        pan: ''
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        passwordError: '',
        genderError: '',
        phoneError: '',
        addressError: '',
        aadharError: '',
        panError: ''
    });

    const handleSignup = (e) => {
        e.preventDefault();
        const isValidName = validateName(formData.name);
        const isValidPassword = validatePassword(formData.password);
        const isValidGender = validateGender(formData.gender);
        const isValidPhone = validatePhone(formData.phone);
        const isValidAddress = validateAddress(formData.address);
        const isValidAadhar = validateAadhar(formData.aadhar);
        const isValidPan = validatePan(formData.pan);

        if (isValidName && isValidPassword && isValidGender && isValidPhone && isValidAddress && isValidAadhar && isValidPan) {
            // Proceed with signup
            axios.post('http://localhost:8080/signup_rider/add', formData)
                .then(response => {
                    console.log('Signup successful:', response.data);
                    toast.success('Signup successful!');
                    // Handle success (e.g., redirect to another page or show a success message)
                })
                .catch(error => {
                    console.error('Signup error:', error);
                    toast.error('Signup error. Please try again.');
                    // Handle error (e.g., show an error message)
                });
        }
    };

    const validateName = (name) => {
        if (name.trim() === '') {
            setFormErrors(prev => ({ ...prev, nameError: 'Name is required' }));
            return false;
        }
        setFormErrors(prev => ({ ...prev, nameError: '' }));
        return true;
    };

    const validatePassword = (password) => {
        if (password.trim() === '') {
            setFormErrors(prev => ({ ...prev, passwordError: 'Password is required' }));
            // toast.error('Password is required');
            return false;
        }
        setFormErrors(prev => ({ ...prev, passwordError: '' }));
        return true;
    };

    const validateGender = (gender) => {
        if (gender.trim() === '') {
            setFormErrors(prev => ({ ...prev, genderError: 'Gender is required' }));
            // toast.error('Gender is required');
            return false;
        }
        setFormErrors(prev => ({ ...prev, genderError: '' }));
        return true;
    };

    const validatePhone = (phone) => {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            setFormErrors(prev => ({ ...prev, phoneError: 'Invalid phone number' }));
            // toast.error('Invalid phone number');
            return false;
        }
        setFormErrors(prev => ({ ...prev, phoneError: '' }));
        return true;
    };

    const validateAddress = (address) => {
        if (address.trim() === '') {
            setFormErrors(prev => ({ ...prev, addressError: 'Address is required' }));
            // toast.error('Address is required');
            return false;
        }
        setFormErrors(prev => ({ ...prev, addressError: '' }));
        return true;
    };

    const validateAadhar = (aadhar) => {
        const aadharPattern = /^\d{12}$/;
        if (!aadharPattern.test(aadhar)) {
            setFormErrors(prev => ({ ...prev, aadharError: 'Invalid Aadhar number' }));
            return false;
        }
        setFormErrors(prev => ({ ...prev, aadharError: '' }));
        return true;
    };

    const validatePan = (pan) => {
        const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        if (!panPattern.test(pan)) {
            setFormErrors(prev => ({ ...prev, panError: 'Invalid PAN card number' }));
            return false;
        }
        setFormErrors(prev => ({ ...prev, panError: '' }));
        return true;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="unique-signup-container">
            <div className="unique-signup-box">
                <h2 className="unique-signup-title">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <div className="unique-input-group">
                        <FaRegUserCircle className="unique-icon" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.nameError && <div className="unique-error-message">{formErrors.nameError}</div>}
                    <div className="unique-input-group">
                        <FaLock className="unique-icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.passwordError && <div className="unique-error-message">{formErrors.passwordError}</div>}
                    <div className="unique-input-group">
                        <FaRegUserCircle className="unique-icon" />
                        <input
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.genderError && <div className="unique-error-message">{formErrors.genderError}</div>}
                    <div className="unique-input-group">
                        <FaPhone className="unique-icon" />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.phoneError && <div className="unique-error-message">{formErrors.phoneError}</div>}
                    <div className="unique-input-group">
                        <FaAddressCard className="unique-icon" />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.addressError && <div className="unique-error-message">{formErrors.addressError}</div>}
                    <div className="unique-input-group">
                        <FaIdCard className="unique-icon" />
                        <input
                            type="text"
                            name="aadhar"
                            placeholder="Aadhar Number"
                            value={formData.aadhar}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.aadharError && <div className="unique-error-message">{formErrors.aadharError}</div>}
                    <div className="unique-input-group">
                        <FaIdCardAlt className="unique-icon" />
                        <input
                            type="text"
                            name="pan"
                            placeholder="PAN Card Number"
                            value={formData.pan}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.panError && <div className="unique-error-message">{formErrors.panError}</div>}
                    <button type="submit" className="unique-signup-button"><Link to="/rider">Sign Up</Link></button>
                </form>
                <div className="unique-login-link">
                    Already have an account? <Link to="/loginrider">Login</Link>
                </div>
                <div className="unique-terms-policy">
                    <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Signuprider;