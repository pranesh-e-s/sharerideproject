
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Riderprofile.css';

// const ProfilePage = () => {
//     const [profileData, setProfileData] = useState({
//         name: '',
//         gender: '',
//         phone: '',
//         address: ''
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
//                 const response = await axios.get(`http://localhost:8080/signup_rider/profile/${userId}`);
//                 setProfileData(response.data);
//                 setUpdatedData(response.data);
//             } catch (error) {
//                 setError('Failed to fetch profile data. Please try again later.');
//                 console.error('Error fetching profile data:', error);
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
//             await axios.put(`http://localhost:8080/signup_rider/profile/${userId}`, updatedData);
//             setProfileData(updatedData);
//             setEditMode(false);
//             setError('');
//         } catch (error) {
//             setError('Failed to update profile. Please try again later.');
//             console.error('Error updating profile:', error);
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
//                         <strong>Phone:</strong> {profileData.phone}
//                     </div>
//                     <div className="profile-detail">
//                         <strong>Address:</strong> {profileData.address}
//                     </div>
//                     <button className="edit-button" onClick={handleEditClick}>Edit</button>
//                 </div>
//             )}
//             {editMode && (
//                 <form className="edit-form" onSubmit={handleUpdate}>
//                     <h2 className="profile-title">Edit Profile</h2>
//                     <div className="form-group">
//                         <label>Name:</label>
//                         <input
//                             type="text"
//                             name="name"
//                             value={updatedData.name}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Gender:</label>
//                         <input
//                             type="text"
//                             name="gender"
//                             value={updatedData.gender}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Phone:</label>
//                         <input
//                             type="text"
//                             name="phone"
//                             value={updatedData.phone}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <label>Address:</label>
//                         <input
//                             type="text"
//                             name="address"
//                             value={updatedData.address}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <button type="submit" className="update-button">Update</button>
//                     <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default ProfilePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Sharerprofile.css';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        gender: '',
        phone: '',
        address: '',
        password: '' // Add password field
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
                const response = await axios.get(`http://localhost:8080/signup_rider/profile/${userId}`);
                setProfileData(response.data);
                setUpdatedData(response.data);
            } catch (error) {
                setError('Failed to fetch profile data. Please try again later.');
                console.error('Error fetching profile data:', error);
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
            await axios.put(`http://localhost:8080/signup_rider/profile/${userId}`, updatedData);
            setProfileData(updatedData);
            setEditMode(false);
            setError('');
        } catch (error) {
            setError('Failed to update profile. Please try again later.');
            console.error('Error updating profile:', error);
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
                        <strong>Phone:</strong> {profileData.phone}
                    </div>
                    <div className="profile-detail">
                        <strong>Address:</strong> {profileData.address}
                    </div>
                    <div className="profile-detail">
                        <strong>Password:</strong>{profileData.password}
                    </div>
                    <button className="edit-button" onClick={handleEditClick}>Edit</button>
                </div>
            )}
            {editMode && (
                <form className="edit-form" onSubmit={handleUpdate}>
                    <h2 className="profile-title">Edit Profile</h2>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={updatedData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender:</label>
                        <input
                            type="text"
                            name="gender"
                            value={updatedData.gender}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone:</label>
                        <input
                            type="text"
                            name="phone"
                            value={updatedData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={updatedData.address}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="text"
                            name="password"
                            value={updatedData.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="submit-button">Update</button>
                    <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default ProfilePage;
