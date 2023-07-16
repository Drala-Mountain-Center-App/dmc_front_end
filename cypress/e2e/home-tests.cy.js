describe('Home tests', () => {
  it('visits web development page', () => {
    cy.visit('http://localhost:19006/')
    cy.get('[data-testid="drala"]')
    cy.get('[data-testid="timer-home"]').should("contain", "Meditation Timer")
    cy.get('[data-testid="programs"]').should("contain", "Program Calendar")
    cy.get('[data-testid="videos-home"]').should("contain", "Teaching Videos")
    cy.get('[data-testid="gallery-home"]').should("contain", "Photo Gallery")
    cy.get('[data-testid="donate-home"]').should("contain", "Donate to DMC")
  })
})
