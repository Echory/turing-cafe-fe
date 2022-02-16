import React, { Component } from 'react';
import './App.css';
import {getAllReservations} from '../apiCalls'
import Card from '../Components/Card/Card'
import Form from '../Components/Form/Form'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

componentDidMount = () => {
  getAllReservations()
  .then(data => this.setState({reservations: data}))
  .catch(err => console.log(err))
}

showReservations = () => {
  return this.state.reservations.map (reservation => {
    return(
      <Card 
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
}

addReservation = (newReservation) => {
  this.setState({ reservations: [...this.state.reservations, newReservation]})
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation} />
        <div className='resy-form'>
        </div>
        <div className='resy-container'>
          {this.showReservations()}
        </div>
      </div>
    )
  }
}

export default App;
