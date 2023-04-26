describe("Verify the drag and drop functionality", () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Dynamic.html");
  });
  it("Drags and drop the first item", () => {
    const dataTransfer = new DataTransfer();

    cy.get("#angular").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    cy.get("#mongo").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    cy.get("#node").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    //Assertion to validate that the images are present in drop area
    cy.get(
      '[style="height: 176px; width: 120px; display: inline-block;"] > #angular'
    ).should("be.visible");
    cy.get(
      '[style="height: 125px; width: 120px; display: inline-block;"] > #mongo'
    ).should("be.visible");
    cy.get(
      '[style="height: 116px; width: 120px; display: inline-block;"] > #node'
    ).should("be.visible");
  });
});
