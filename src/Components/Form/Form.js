import React, {Component} from 'react'   
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitReservation = (event) => {
    event.preventDefault()
    const newReservation = {...this.state}
    
    this.props.addReservation(newReservation)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({name: '', date: '', time: '', number: 0})
  }

  render() {
    return(
      <section className="form">
        <input type="text"
        placeholder="Name"
        name="name"
        value={this.state.name}
        onChange={event => this.handleChange(event)}
        />

        <input type="text"
        placeholder="Date"
        name="date"
        value={this.state.date}
        onChange={event => this.handleChange(event)}
        />

        <input type="text"
        placeholder="Time"
        name="time"
        value={this.state.time}
        onChange={event => this.handleChange(event)}
        />

        <input type="text"
        placeholder="Number of Guests"
        name="number"
        value={this.state.number}
        onChange={event => this.handleChange(event)}
        />
        
        <button className="submit-button" onClick={event => this.submitReservation(event)}>Make Reservation</button>
      </section>
    )
  }
}

export default Form