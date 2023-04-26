describe("Interacts with modals", () => {
  it("Launches the modal and captures the data in the modal", () => {
    cy.visit("https://demo.automationtesting.in/Modals.html");
    cy.get(":nth-child(1) > .panel > .panel-body > a.btn").click();
    ///Learning--
    ///The modal was not opening earlier because the modal doamin is http and cypress does not allow
    ///switching from https to http as this is a security threat.
    ///In order to ignore this issue I have added "chromeWebSecurity: false," in cypress.config.js

    ///Assert modal title
    cy.get("#myModal > .modal-dialog > .modal-content > .modal-header").should(
      "contain",
      "Modal title"
    );

    ///Assert the button in modal
    cy.get(
      "#myModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    )
      .should("be.visible")
      .click();
  });

  it("Verifies the multiple modals", () => {
    cy.visit("https://demo.automationtesting.in/Modals.html");
    cy.get('[href="#myModalMulti"]').click();
    cy.get(
      "#myModalMulti > .modal-dialog > .modal-content > .modal-body > .btn"
    )
      .should("be.visible")
      .click();

    cy.get(
      "#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title"
    ).should("be.visible");
    cy.get(
      "#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
  });
});
