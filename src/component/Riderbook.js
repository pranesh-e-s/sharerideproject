import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Riderbook.css';

function Riderbook() {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split('T')[0];

  const searchOffers = () => {
    fetch(`http://localhost:8080/api/offers/search?leavingFrom=${leavingFrom}&goingTo=${goingTo}&travelDate=${travelDate}&passengers=${passengers}`)
      .then(response => response.json())
      .then(data => { 
        console.log('Fetched data:', data);

        if (data.length > 0) {
          navigate('/offers', { state: { offers: data } });
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const increasePassengers = () => {
    if (passengers < 3) {
      setPassengers(passengers + 1);
    }
  };

  const decreasePassengers = () => {
    if (passengers > 1) {
      setPassengers(passengers - 1);
    }
  };

  return (
    <div className="app">
      <div className="hero">
        <h1>Your pick of rides at low prices</h1>
      </div>
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Leaving from"
            value={leavingFrom}
            onChange={e => setLeavingFrom(e.target.value)}
          />
          <input
            type="text"
            placeholder="Going to"
            value={goingTo}
            onChange={e => setGoingTo(e.target.value)}
          />
          <input
            type="date"
            value={travelDate}
            onChange={e => setTravelDate(e.target.value)}
            min={currentDate} 
          />
          <div className="passenger-selector">
            <label>Passenger</label>
            <div className="passenger-control">
              <button onClick={decreasePassengers}>-</button>
              <span>{passengers}</span>
              <button onClick={increasePassengers}>+</button>
            </div>
          </div>
          <button onClick={searchOffers} className="search-button">Search Rides</button>
        </div>
      </div>
      <div className="info">
        <div className="info-item">
          <h2>Convenient Ride Sharing</h2>
          <p>No matter where you're going, find the perfect ride from our wide range of destinations and routes at low prices.</p>
        </div>
        <div className="info-item">
          <h2>Trusted Ride Partners</h2>
          <p>We ensure that our members and partners are verified with reviews, profiles, and IDs, so you can book your ride with confidence on our secure platform.</p>
        </div>
        <div className="info-item">
          <h2>Easy Booking</h2>
          <p>Booking a ride has never been easier! Our simple app, powered by great technology, allows you to book a ride in just minutes.</p>
        </div>
      </div>
    </div>
  );
}

export default Riderbook;