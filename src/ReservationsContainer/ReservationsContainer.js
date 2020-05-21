import React from 'react';
import ReservationCard from '../ReservationCard/ReservationCard';
import './ReservationsContainer.css';

const ReservationsContainer = ({reservations}) => {
  let currentReservation = reservations.map(reservation => {
    return (
      <ReservationCard key={reservation.number + reservation.name} reservation={reservation}/>
    )
  })
  // console.log('currentReservation', currentReservation);
  return (
    <section className="reservations-container">
      {currentReservation}
    </section>
  )
}

export default ReservationsContainer;
