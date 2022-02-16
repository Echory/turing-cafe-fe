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
      </section>
    )
  }
}

export default Form