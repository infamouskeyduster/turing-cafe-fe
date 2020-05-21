import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({reservation}) => {
  return (
    <div className="reservation-card">
      <h3>{reservation.name}</h3>
      <p>{reservation.date}</p>
      <p>{reservation.time}PM</p>
      <p>Number of Guests: {reservation.number}</p>
      <button>CANCEL</button>
    </div>
  )
}

export default ReservationCard;
