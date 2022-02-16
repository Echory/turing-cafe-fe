import React from 'react' 
import './Card.css'

const Card = ({id, name, date, time, number}) => {
  return (
    <section key="id" className="card">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>Table for {number}</p>
    </section>
  )
}

export default Card