import React, { Component } from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      date: null,
      time: null,
      numberOfGuests: null,
    }
  }

  updateStateWithUserInput = () => {
    console.log('user is typing');
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <input placeholder="Name"></input>
          <input placeholder="Date (mm/dd)"></input>
          <input placeholder="Time"></input>
          <input placeholder="Number of Guests"></input>
          <button>Make Reservation</button>
        </form>
      </div>
    )
  }
}
export default ReservationForm;
