describe('Home tests', () => {
  it('visits web development page', () => {
    cy.visit('http://localhost:19006/')

    cy.get('[data-testid="timer-home"]').should("contain", "Meditation Timer").click()

  })
})