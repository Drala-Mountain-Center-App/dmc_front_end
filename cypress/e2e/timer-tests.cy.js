describe('Timer tests', () => {
beforeEach(() => {
    cy.visit('http://localhost:19006/')
    cy.get('[data-testid="timer-home"]').should("contain", "Meditation Timer").click()
    
  })

  it("Takes the user to the meditation page after clicking on link from the home page. On the meditation page they see an image from the Drala Center, the word, Begin, and a breath animation", () => {
    cy.get('[data-testid="timer-background"]')
    cy.get('[data-testid="breath-animation"]')
    cy.contains("Begin")
  })


  it("Should allow a user to press the word Begin to start the meditation. Then the user will see the word, Pause, after another press, the word changes to Begin Again", () => {
    cy.contains("Begin")
    cy.get('[data-testid="press"]').click()
    cy.contains("Pause")
    cy.get('[data-testid="press"]').click()
    cy.contains("Begin Again")
  })

  it("Should allow a user to go back to the home page by clicking the arrow in the navigation container next to the words 20 Min Meditation Timer", () => {
    cy.get('[style="justify-content: center; align-items: flex-start; margin-left: 0px;"] > .r-cursor-1loqt21').click()
    cy.get('[data-testid="timer-home"]').should("contain", "Meditation Timer")
  })
  })

  
