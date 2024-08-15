// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Sharerprofile.css'; 

// const Sharerprofile = () => {
//     const [profileData, setProfileData] = useState({
//         name: '',
//         gender: '',
//         mobile: '',
//         vehicleDetails: '',
//         vehicleRegNo: '',
//         aadhar: '',
//         pan: '',
//         licenseNo: ''
//     });
//     const [editMode, setEditMode] = useState(false);
//     const [updatedData, setUpdatedData] = useState(profileData);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         const fetchProfileData = async () => {
//             const userId = localStorage.getItem('userId');
//             if (!userId) {
//                 setError('User not logged in');
//                 return;
//             }

//             try {
//                 const response = await axios.get(`http://localhost:8080/signupridesharer/profile/${userId}`);
//                 setProfileData(response.data);
//                 setUpdatedData(response.data);
//             } catch (error) {
//                 setError('Failed to fetch profile data. Please try again later.');
//             }
//         };

//         fetchProfileData();
//     }, []);

//     const handleEditClick = () => {
//         setEditMode(true);
//     };

//     const handleCancel = () => {
//         setEditMode(false);
//         setUpdatedData(profileData);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUpdatedData((prevState) => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         const userId = localStorage.getItem('userId');
//         if (!userId) {
//             setError('User not logged in');
//             return;
//         }

//         try {
//             await axios.put(`http://localhost:8080/signupridesharer/profile/${userId}`, updatedData);
//             setProfileData(updatedData);
//             setEditMode(false);
//             setError('');
//         } catch (error) {
//             setError('Failed to update profile. Please try again later.');
//         }
//     };

//     return (
//         <div className="profile-container">
//             {error && <div className="error-message">{error}</div>}
//             {!error && !editMode && (
//                 <div className="profile-content">
//                     <h2 className="profile-title">Profile</h2>
//                     <div className="profile-detail">
//                         <strong>Name:</strong> {profileData.name}
//                     </div>
//                     <div className="profile-detail">
//                         <strong>Gender:</strong> {profileData.gender}
//                     </div>
//                     <div className="profile-detail">
//                         <strong>Mobile:</strong> {profileData.mobile}
//                     </div>
//                     <div className="profile-detail">
//                         <strong>Vehicle Details:</strong> {profileData.vehicleDetails}
//                     </div>
//                     <div className="profile-detail">
//                         <strong>Vehicle Reg No:</strong> {profileData.vehicleRegNo}
//                     </div>
//                     {/* <div className="profile-detail">
//                         <strong>Aadhar:</strong> {profileData.aadhar}
//                     </div>
//                     <div className="profile-detail">
//                         <strong>Pan:</strong> {profileData.pan}
//                     </div> */}
//                     <div className="profile-detail">
//                         <strong>License No:</strong> {profileData.licenseNo}
//                     </div>
//                     <button className="edit-button" onClick={handleEditClick}>Edit</button>
//                 </div>
//             )}
//             {editMode && (
//                 <form className="profile-form" onSubmit={handleUpdate}>
//                     <h2 className="profile-title">Edit Profile</h2>
//                     <div className="form-group">
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={updatedData.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Gender:</label>
//                         <input
//                             type="text"
//                             name="gender"
//                             value={updatedData.gender}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Mobile:</label>
//                         <input
//                             type="text"
//                             name="mobile"
//                             value={updatedData.mobile}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Vehicle Details:</label>
//                         <input
//                             type="text"
//                             name="vehicleDetails"
//                             value={updatedData.vehicleDetails}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Vehicle Reg No:</label>
//                         <input
//                             type="text"
//                             name="vehicleRegNo"
//                             value={updatedData.vehicleRegNo}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     {/* <div className="form-group">
//                         <label>Aadhar:</label>
//                         <input
//                             type="text"
//                             name="aadhar"
//                             value={updatedData.aadhar}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Pan:</label>
//                         <input
//                             type="text"
//                             name="pan"
//                             value={updatedData.pan}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div> */}
//                     <div className="form-group">
//                         <label>License No:</label>
//                         <input
//                             type="text"
//                             name="licenseNo"
//                             value={updatedData.licenseNo}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="submit-button">Update</button>
//                     <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default Sharerprofile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sharerprofile.css'; 

const Sharerprofile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        gender: '',
        mobile: '',
        vehicleDetails: '',
        vehicleRegNo: '',
        licenseNo: '',
        password: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [updatedData, setUpdatedData] = useState(profileData);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfileData = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                setError('User not logged in');
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/signupridesharer/profile/${userId}`);
                setProfileData(response.data);
                setUpdatedData(response.data);
            } catch (error) {
                setError('Failed to fetch profile data. Please try again later.');
            }
        };

        fetchProfileData();
    }, []);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
        setUpdatedData(profileData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        if (!userId) {
            setError('User not logged in');
            return;
        }

        try {
            await axios.put(`http://localhost:8080/signupridesharer/profile/${userId}`, updatedData);
            setProfileData(updatedData);
            setEditMode(false);
            setError('');
        } catch (error) {
            setError('Failed to update profile. Please try again later.');
        }
    };

    return (
        <div className="profile-container">
            {error && <div className="error-message">{error}</div>}
            {!error && !editMode && (
                <div className="profile-content">
                    <h2 className="profile-title">Profile</h2>
                    <div className="profile-detail">
                        <strong>Name:</strong> {profileData.name}
                    </div>
                    <div className="profile-detail">
                        <strong>Gender:</strong> {profileData.gender}
                    </div>
                    <div className="profile-detail">
                        <strong>Mobile:</strong> {profileData.mobile}
                    </div>
                    <div className="profile-detail">
                        <strong>Vehicle Details:</strong> {profileData.vehicleDetails}
                    </div>
                    <div className="profile-detail">
                        <strong>Vehicle Reg No:</strong> {profileData.vehicleRegNo}
                    </div>
                    <div className="profile-detail">
                        <strong>License No:</strong> {profileData.licenseNo}
                    </div>
                    <div className="profile-detail">
                        <strong>Password:</strong> {profileData.password}
                    </div>
                    <button className="edit-button" onClick={handleEditClick}>Edit</button>
                </div>
            )}
            {editMode && (
                <form className="profile-form" onSubmit={handleUpdate}>
                    <h2 className="profile-title">Edit Profile</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <input
                            type="text"
                            name="gender"
                            value={updatedData.gender}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Mobile:</label>
                        <input
                            type="text"
                            name="mobile"
                            value={updatedData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Vehicle Details:</label>
                        <input
                            type="text"
                            name="vehicleDetails"
                            value={updatedData.vehicleDetails}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Vehicle Reg No:</label>
                        <input
                            type="text"
                            name="vehicleRegNo"
                            value={updatedData.vehicleRegNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>License No:</label>
                        <input
                            type="text"
                            name="licenseNo"
                            value={updatedData.licenseNo}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={updatedData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Update</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default Sharerprofile;
