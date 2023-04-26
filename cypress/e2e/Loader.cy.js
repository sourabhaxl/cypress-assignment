describe("Validate loader", () => {
  it("Validates that the modal is loaded successfully", () => {
    cy.visit("https://demo.automationtesting.in/Loader.html");
    cy.get("#loader").click();
    cy.get(".blockMsg").should("be.visible").wait(10000);
    cy.get(".modal-content").should("be.visible"); //Asserting that the modal is loaded
    cy.get(".modal-footer > .btn-primary").click();
    cy.get(".panel-heading").should("be.visible");
  });
});
