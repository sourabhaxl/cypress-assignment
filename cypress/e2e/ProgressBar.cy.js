describe("Validate progressbar is at 100%", () => {
  it("Verifies the progress bar by clicking on download button", () => {
    cy.visit("https://demo.automationtesting.in/ProgressBar.html");
    cy.get('.progressbar-text').should('not.not.have.text')
    cy.get('#cricle-btn').click().wait(5000)
    cy.get('.progressbar-text').should('have.text', 100)

  });
});
