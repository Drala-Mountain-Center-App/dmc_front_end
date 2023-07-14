describe("Videos Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:19006/");
  });

  it("should be able to navigate to the videos page after clicking on it and see videos available", () => {
    cy.get('[data-testid="videos-home"]').should("contain", "Videos").click();

    cy.get(':nth-child(2) > [data-testid="event-title"]').should(
      "contain",
      "Learn to Meditate Part 1"
    );
    cy.get(':nth-child(2) > [data-testid="event-speaker"]').should(
      "contain",
      "Daniel Hessey"
    );
    cy.get(':nth-child(2) > [data-testid="event-topic"]').should(
      "contain",
      "Meditation Instruction"
    );
    cy.get(':nth-child(2) > [data-testid="event-date-recorded"]').should(
      "contain",
      "Date Recorded: 18 / 23 / 2017"
    );
  });

  it("should be able to return home after watching the video", () => {
    cy.get(".css-view-175oi2r").click();
    cy.get('[data-testid="header-title"]').should(
      "contain",
      "Drala Mountain Center"
    );
  });
});
