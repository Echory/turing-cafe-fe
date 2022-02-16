import React from 'react' 

const Card = ({id, name, date, time, number}) => {
  return (
    <section key="id">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>Table for {number}</p>
    </section>
  )
}

export default Card