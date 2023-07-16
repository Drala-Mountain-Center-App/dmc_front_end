describe('meditation stats spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:19006/')
  });
  
  it('should navigate to a new page that tells a user to login to see stats', () => {
    cy.get('.r-alignItems-1habvwh > :nth-child(6)').click()
    cy.get('[style="margin-right: 16px; margin-left: 16px; justify-content: center; max-width: 912px;"] > .css-text-1rynq56')
      .should('contain', 'Meditation Stats')
    cy.get('.r-flexDirection-1d5kdc7 > :nth-child(1) > .r-alignItems-1awozwy > .css-text-1rynq56')
    .should('contain', "No current meditations. Please login and let's get zen!")
  });

  it('should display a users stats if they are logged in', () => {
    // cy.get('.r-borderBottomColor-flfbzl > .css-view-175oi2r > .css-text-1rynq56').click()
  });
})