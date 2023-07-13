describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:19006/')
    // cy.get('[accessibilityLabel=“box1”]')

    cy.get('[data-testid="timer-home"]').should("contain", "Meditation Timer").click()
    cy.get('h1').should('contain', '20 Min Meditation Timer')
     cy.get('[style="width: 500px; height: 500px; position: absolute; inset: 0px; align-items: center; justify-content: center;"] > .css-view-175oi2r > .css-text-1rynq56').should('contain', "Begin").click()
     cy.get('[style="width: 500px; height: 500px; position: absolute; inset: 0px; align-items: center; justify-content: center;"] > .css-view-175oi2r > .css-text-1rynq56').should('contain', "Pause").click()
      cy.get('[style="width: 500px; height: 500px; position: absolute; inset: 0px; align-items: center; justify-content: center;"] > .css-view-175oi2r > .css-text-1rynq56').should('contain', "Begin Again")
    cy.get('.r-flex-13awgt0 > :nth-child(3) > :nth-child(1)')
    
    // .url().should('include', 'wwww.dralamountain.org/dmc-donate/')
  })

  
})