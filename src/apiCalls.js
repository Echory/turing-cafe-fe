const getAllReservations = async () => {
  return fetch("http://localhost:3001/api/v1/reservations")
}

export {getAllReservations}