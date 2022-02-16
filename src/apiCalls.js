const getAllReservations = async () => {
  return fetch("http://localhost:3001/api/v1/reservations")
  .then(response => response.json())
  .catch(err => {
    return err
  })
}

export {getAllReservations}