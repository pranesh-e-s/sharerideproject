import React from 'react';
import './Riderhistory.css';

const Riderhistory = () => {
    const rides = [
        {
            sharerName: 'Praveen',
            startingPoint: 'erode',
            endingPoint: 'covai',
            totalAmount: 70,
            status: 'completed'
        },
        {
            sharerName: 'Prakash',
            startingPoint: 'covai',
            endingPoint: 'chennai',
            totalAmount: 300,
            status: 'completed'
        },
        {
            sharerName: 'Abisek',
            startingPoint: 'SKCT',
            endingPoint: 'Gandhipuram',
            totalAmount: 80,
            status: 'cancelled'
        },
    ];

    return (
        <div className="ride-history-container">
            <h2>Ride History</h2>
            <div className="ride-history">
                {rides.map((ride, index) => (
                    <div key={index} className="ride">
                        <p><strong>Sharer Name:</strong> {ride.sharerName}</p>
                        <p><strong>Starting Point:</strong> {ride.startingPoint}</p>
                        <p><strong>Ending Point:</strong> {ride.endingPoint}</p>
                        <p><strong>Total Amount:</strong> ₹{ride.totalAmount}</p>
                        <p>
                            <strong>Status:</strong>
                            <span className={`status ${ride.status}`}>
                                {ride.status}
                            </span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Riderhistory;
