describe('programs spec', () => {
  beforeEach(() => {
    // cy.intercept('POST', "https://drala-mountain-api-4812ef039e59.herokuapp.com/graphql", {
    //   fixture: 'event-examples.json'
    // })
    cy.visit('http://localhost:19006/')
  });
  
  it('should navigate to a new page that displays programs', () => {
    cy.get('[data-testid="programs"]').click()
    cy.get('[data-testid="programEvent"]')
    .should('have.length', 32)
  });

  it('should display the program name', () => {
    cy.get('[data-testid="programs"]').click()
    cy.get('[data-testid="programEvent"]').first()
    .should('contain', "Shambhala Sun Camp")
  });
})