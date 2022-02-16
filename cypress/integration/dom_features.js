describe('Reservations flow', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should be able to visit page and view reservations', () => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations')
    cy.get('.card')
  })
  
  it('Should see reservation form', () => {
    cy.visit('http://localhost:3000') 
    cy.get('.form')
  })

  it('Should add reservation data', () => {
    cy.visit('http://localhost:3000') 
    cy.get('input')
    .get('.submit-button').click()
  })
})