import React, { useState } from 'react';
import './offer.css';
import { Link } from 'react-router-dom';

function Offer() {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [startHour, setStartHour] = useState('');
  const [startMinute, setStartMinute] = useState('');
  const [startMeridiem, setStartMeridiem] = useState('AM');
  const [availability, setAvailability] = useState(1);
  const [minimumAmount, setMinimumAmount] = useState('');
  const [error, setError] = useState('');

  const currentDate = new Date().toISOString().split('T')[0];

  const handleHourChange = (e) => {
    const value = e.target.value;
    if (/^([1-9]|1[0-2])?$/.test(value)) {
      setStartHour(value);
    }
  };

  const handleMinuteChange = (e) => {
    const value = e.target.value;
    if (/^([0-5]?[0-9])?$/.test(value)) {
      setStartMinute(value);
    }
  };

  const handleSubmit = () => {
    if (!leavingFrom || !goingTo || !travelDate || !startHour || !startMinute || !minimumAmount) {
      setError('Please fill in all required fields.');
      return;
    }

    const payload = {
      leavingFrom,
      goingTo,
      travelDate,
      startHour,
      startMinute,
      startMeridiem,
      availability,
      minimumAmount,
    };

    fetch('http://localhost:8080/api/offers/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to create offer.');
      });
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Become a RideSharer and save on travel costs by sharing your ride with passengers.</h1>
        <div className="flex-image">
          <div className="rideshare-form">
            {error && <p className="error-message">{error}</p>}
            <div className="form-group">
              <input
                type="text"
                placeholder="Leaving from..."
                value={leavingFrom}
                onChange={(e) => setLeavingFrom(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Going to..."
                value={goingTo}
                onChange={(e) => setGoingTo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                min={currentDate} // Set minimum date to today
              />
            </div>
            <div className="form-group time-input">
              <label>Time: </label>
              <input
                type="text"
                value={startHour}
                onChange={handleHourChange}
                placeholder="HH"
                maxLength={2}
              />
              <span>:</span>
              <input
                type="text"
                value={startMinute}
                onChange={handleMinuteChange}
                placeholder="MM"
                maxLength={2}
              />
              <select value={startMeridiem} onChange={(e) => setStartMeridiem(e.target.value)}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
            <div className="form-group">
              <div className="availability-control">
                <label>Availability:</label>
                <button onClick={() => setAvailability(availability > 1 ? availability - 1 : 1)}>-</button>
                <span>{availability}</span>
                <button onClick={() => setAvailability(availability < 3 ? availability + 1 : 3)}>+</button>
              </div>
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Minimum amount..."
                value={minimumAmount}
                onChange={(e) => setMinimumAmount(e.target.value)}
              />
            </div>
            <button className="publish-button" onClick={handleSubmit}>Publish a ride</button>
          </div>
          <img
            src='https://jugnoo.io/wp-content/uploads/2022/02/Rideshare-software-1-1024x640.jpg'
            alt='sharer'
            className='image-1'
          />
        </div>
      </div>
      <div className="drive-share-save-container">
        <h1 className="header">Drive. Share. Save.</h1>
        <div className="content-section">
          <div className="content-item">
            <h2 className="subheader">Drive</h2>
            <p>Keep your plans! Hit the road just as you anticipated and make the most of your vehicle’s empty seats.</p>
          </div>
          <div className="content-item">
            <h2 className="subheader">Share</h2>
            <p>Travel with good company. Share a memorable ride with travelers from all walks of life.</p>
          </div>
          <div className="content-item">
            <h2 className="subheader">Save</h2>
            <p>Tolls, petrol, electricity... Easily divvy up all the costs with other passengers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;

