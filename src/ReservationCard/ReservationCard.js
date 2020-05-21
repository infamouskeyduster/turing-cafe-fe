import React from 'react';

const ReservationCard = ({reservation}) => {
  return (
    <div className="reservation-card">
      <h3>{reservation.name}</h3>
      <p>{reservation.date}</p>
      <p>{reservation.time}PM</p>
      <p>Number of Guests: {reservation.number}</p>
    </div>
  )
}

export default ReservationCard;
