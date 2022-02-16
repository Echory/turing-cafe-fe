import React, { Component } from 'react';
import './App.css';
import {getAllReservations} from '../apiCalls'
import Card from '../Components/Card/Card'

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


  render() {
    return (
      <div className="App">
        <Card />
        <h1 className='app-title'>Turing Cafe Reservations</h1>
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
