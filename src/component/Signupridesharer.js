import React, { useState } from 'react';
import axios from 'axios';
import { FaRegUserCircle, FaLock, FaPhone, FaCar, FaIdCard, FaIdCardAlt, FaPassport } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signupridesharer = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        gender: '',
        mobile: '',
        vehicleDetails: '',
        vehicleRegNo: '',
        aadhar: '',
        pan: '',
        licenseNo: '',
        photo: null
    });

    const [formErrors, setFormErrors] = useState({
        nameError: '',
        passwordError: '',
        genderError: '',
        mobileError: '',
        vehicleDetailsError: '',
        vehicleRegNoError: '',
        aadharError: '',
        panError: '',
        licenseNoError: '',
        photoError: ''
    });

    const handleSignup = async (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });

            try {
                const response = await axios.post('http://localhost:8080/signupridesharer/add', formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                console.log(response.data);  // Log the response data for debugging
                toast.success('Signup successful');
            } catch (error) {
                console.error(error.response ? error.response.data : error.message);  // Log the error response for debugging
                toast.error('Signup failed');
            }
        }
    };

    const validateForm = () => {
        const errors = {};
        errors.nameError = formData.name.trim() === '' ? 'Name is required' : '';
        errors.passwordError = formData.password.trim() === '' ? 'Password is required' : '';
        errors.genderError = formData.gender.trim() === '' ? 'Gender is required' : '';
        errors.mobileError = /^\d{10}$/.test(formData.mobile) ? '' : 'Invalid mobile number';
        errors.vehicleDetailsError = formData.vehicleDetails.trim() === '' ? 'Vehicle details are required' : '';
        errors.vehicleRegNoError = formData.vehicleRegNo.trim() === '' ? 'Vehicle registration number is required' : '';
        errors.aadharError = /^\d{12}$/.test(formData.aadhar) ? '' : 'Invalid Aadhar number';
        errors.panError = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.pan) ? '' : 'Invalid PAN card number';
        errors.licenseNoError = formData.licenseNo.trim() === '' ? 'License number is required' : '';

        setFormErrors(errors);
        return Object.values(errors).every(error => error === '');
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="unique-signup-container">
            <ToastContainer />
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
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.mobileError && <div className="unique-error-message">{formErrors.mobileError}</div>}
                    <div className="unique-input-group">
                        <FaCar className="unique-icon" />
                        <input
                            type="text"
                            name="vehicleDetails"
                            placeholder="Vehicle Details"
                            value={formData.vehicleDetails}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.vehicleDetailsError && <div className="unique-error-message">{formErrors.vehicleDetailsError}</div>}
                    <div className="unique-input-group">
                        <FaCar className="unique-icon" />
                        <input
                            type="text"
                            name="vehicleRegNo"
                            placeholder="Vehicle Registration Number"
                            value={formData.vehicleRegNo}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.vehicleRegNoError && <div className="unique-error-message">{formErrors.vehicleRegNoError}</div>}
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
                    <div className="unique-input-group">
                        <FaPassport className="unique-icon" />
                        <input
                            type="text"
                            name="licenseNo"
                            placeholder="License Number"
                            value={formData.licenseNo}
                            onChange={handleInputChange}
                        />
                    </div>
                    {formErrors.licenseNoError && <div className="unique-error-message">{formErrors.licenseNoError}</div>}
                   <button type="submit" className="unique-signup-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signupridesharer;
