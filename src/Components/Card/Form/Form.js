import React, {Component} from 'react'   

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
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render() {
    return(
      <section>
        <input type="text"
        placeholder="Name"
        name="name"
        />
        <input type="text"
        placeholder="Date"
        name="date"
        />
        <input type="text"
        placeholder="Time"
        name="time"
        />
        <input type="text"
        placeholder="Number of guests"
        name="guests"
        />
        <button>Submit</button>
      </section>
    )
  }
}

export default Form