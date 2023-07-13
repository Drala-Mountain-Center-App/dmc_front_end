describe('Home tests', () => {
  it('visits web development page', () => {
    cy.visit('http://localhost:19006/')
    cy.get('[data-testid="drala"]')
    cy.get('[data-testid="timer-home"]').should("contain", "Meditation Timer")
    cy.get('[data-testid="calendar-home"]').should("contain", "Calendar")
    cy.get('[data-testid="videos-home"]').should("contain", "Videos")
    cy.get('[data-testid="gallery-home"]').should("contain", "Gallery")
    cy.get('[data-testid="donate-home"]').should("contain", "Donate")
  })
})