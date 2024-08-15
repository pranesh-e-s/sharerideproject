import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './offers.css';

function Offers() {
  const location = useLocation();
  const navigate = useNavigate();
  const { offers: initialOffers } = location.state || { offers: [] };
  const [offers, setOffers] = useState(initialOffers);
  const [acceptedOfferId, setAcceptedOfferId] = useState(null);

  const handleAccept = (id) => {
    setOffers(offers.map(offer => 
      offer.id === id ? { ...offer, status: 'Accepted' } : offer
    ));
    setAcceptedOfferId(id); // Store the ID of the accepted offer
  };

  const handleDecline = (id) => {
    setOffers(offers.map(offer => 
      offer.id === id ? { ...offer, status: 'Declined' } : offer
    ));
    setAcceptedOfferId(null); 
  };

  const handleViewDetails = (shareriderId) => {
    navigate(`/profile/${shareriderId}`);
  };

  return (
    <div className="offers-wrapper">
      <div className="offers-container">
        {offers.length > 0 ? (
          <table>
            <thead> 
              <tr>
                <th>Leaving From</th>
                <th>Destination</th>
                <th>Date</th>
                <th>Time</th>
                <th>Availability</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map(offer => (
                <tr key={offer.id}>
                  <td>{offer.leavingFrom}</td>
                  <td>{offer.goingTo}</td>
                  <td>{offer.travelDate}</td>
                  <td>{`${offer.startHour}:${offer.startMinute} ${offer.startMeridiem}`}</td>
                  <td>{offer.availability}</td>
                  <td>{offer.minimumAmount}</td>
                  <td className={`status ${offer.status?.toLowerCase()}`}>{offer.status || 'Pending'}</td>
                  <td>
                    {offer.status !== 'Declined' && (
                      <>
                        <button
                          className="accept-button"
                          onClick={() => handleAccept(offer.id)}
                          disabled={acceptedOfferId !== null && acceptedOfferId !== offer.id}
                        >
                          {offer.status === 'Accepted' ? 'Accepted' : 'Accept'}
                        </button>
                      </>
                    )}
                    {offer.status === 'Accepted' && (
                      <>
                        <button
                          className="decline-button"
                          onClick={() => handleDecline(offer.id)}
                        >
                          Decline
                        </button>
                        <span
                          className="view-details-link"
                          onClick={() => handleViewDetails(offer.shareriderId)}
                          style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
                        >
                          View Details
                        </span>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No offers found</p>
        )}
      </div>
    </div>
  );
}

export default Offers;
