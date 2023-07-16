describe('programs spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/')
  });
  
  it('should navigate to a new page that displays programs', () => {
    cy.get('.r-alignItems-1habvwh > :nth-child(2)').click()
    cy.get('[data-testid="programEvent"]')
    .should('have.length', 32)
  });

  it('should display the program name', () => {
    cy.get('.r-alignItems-1habvwh > :nth-child(2)').click()
    cy.get('[data-testid="programEvent"]').first()
    .should('contain', "Shambhala Sun Camp")
  });
})