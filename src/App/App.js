import React, { Component } from 'react';
import './App.css';
import ReservationsContainer from '../ReservationsContainer/ReservationsContainer';
import ReservationForm from '../ReservationForm/ReservationForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  getReservationData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/reservations	');
    const data = await response.json();
    this.setState({reservations: data}, () => {console.log('state', this.state)});
  }

  componentDidMount = () => {
    this.getReservationData();
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
          <ReservationForm />
          <ReservationsContainer reservations={this.state.reservations} />
      </main>
    )
  }
}

export default App;
