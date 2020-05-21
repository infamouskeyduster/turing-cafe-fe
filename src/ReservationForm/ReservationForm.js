import React, { Component } from 'react';
import './ReservationForm.css';

class ReservationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: '',
      time: '',
      number: '',
      formReady: false,
    }
  }

  updateStateWithUserInput = (event) => {
    event.preventDefault();
    let targetedProperty = event.target.id;

    this.setState({ [targetedProperty]: event.target.value }, () => {
    });
  }

  validateUserInfo = (event) => {
    event.preventDefault();
    if (
        this.state.name.length > 0 &&
        this.state.date.length > 0 &&
        this.state.time.length > 0 &&
        this.state.number > 0
      ) {

        console.log('Form is ready!!!');
        this.setState({ formReady: true });
        this.props.addUserInputToStateOfApp({
          name: this.state.name,
          date: this.state.date,
          time: this.state.time,
          number: this.state.number,
        })
      }
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <input id="name" placeholder="Name" onChange={this.updateStateWithUserInput}></input>
          <input id="date" placeholder="Date (mm/dd)" onChange={this.updateStateWithUserInput}></input>
          <input id="time" placeholder="Time" onChange={this.updateStateWithUserInput}></input>
          <input type="number" id="number" placeholder="Number of Guests" onChange={this.updateStateWithUserInput}></input>
          <button type="submit" onClick={this.validateUserInfo}>Make Reservation</button>
        </form>
      </div>
    )
  }
}
export default ReservationForm;
