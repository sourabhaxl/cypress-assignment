describe("Verify the drag and drop functionality", () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Static.html");
  });

  //Drag and drop the first item using trigger function
  it("Drags and drop the first item", () => {
    const dataTransfer = new DataTransfer();

    cy.get("#angular").trigger("dragstart", { dataTransfer });

    cy.get("#droparea").trigger("drop", { dataTransfer });

    cy.get("#droparea > #angular").should("be.visible");
  });

  //Drag & Drop the 2nd item using cypress plugin
  it("drag & drop the 2nd item using cypress drag and drop plugin", () => {
    cy.get("#mongo").drag("#droparea");
    cy.get("#droparea > #mongo").should("be.visible");
  });

  //Drag & Drop all the three items and validating that the items are present in droparea after successful drag
  it("drag & drop the all the three item using cypress drag and drop plugin", () => {
    const dataTransfer = new DataTransfer();

    cy.get("#angular").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    cy.get("#mongo").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    cy.get("#node").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    //Dragging elements twice
    cy.get("#angular").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    cy.get("#mongo").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    cy.get("#node").trigger("dragstart", { dataTransfer });
    cy.get("#droparea").trigger("drop", { dataTransfer });

    //Assertion to validate that the images are present in drop area
    cy.get("#droparea > #angular").should("be.visible");
    cy.get("#droparea > #mongo").should("be.visible");
    cy.get("#droparea > #node").should("be.visible");

    //Not able to drag 2nd and 3rd element using plugin
    /*cy.get('#angular').drag('#droparea')
    
    cy.get('#mongo').drag('#droparea')
  
    cy.get('#node').drag('#droparea')*/
  });
});
