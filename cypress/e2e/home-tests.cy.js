describe('Home tests', () => {
  beforeEach(() => {
    // cy.intercept('POST', "https://drala-mountain-api-4812ef039e59.herokuapp.com/graphql", {
    //   fixture: 'event-examples.json'
    // })
    cy.visit('http://localhost:19006/')
  });
  
  it('Should be able to visit the home page and see 6 widgets', () => {
    // cy.visit('http://localhost:19006/')
    cy.get('[data-testid="drala"]')
    cy.get('.r-alignItems-1habvwh > :nth-child(1)').should("contain", "Meditation Timer")
    cy.get('.r-alignItems-1habvwh > :nth-child(2)').should("contain", "Program Calendar")
    cy.get('.r-alignItems-1habvwh > :nth-child(3)').should("contain", "Teaching Videos")
    cy.get('.r-alignItems-1habvwh > :nth-child(4)').should("contain", "Photo Gallery")
    cy.get('.r-alignItems-1habvwh > :nth-child(5)').should("contain", "Donate to DMC")
    cy.get('.r-alignItems-1habvwh > :nth-child(6)').should("contain", "Meditation Stats")
  })
})
