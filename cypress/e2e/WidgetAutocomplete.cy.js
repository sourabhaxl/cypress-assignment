describe("Verify the widget autocomplete functionality", () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/AutoComplete.html");
  });

  it("Verify that autocomplete suggestions are visible", () => {
    cy.get("#searchbox").click().type("Aus");
    cy.get(".ui-corner-all").contains("Australia").click();
  });

  it("Verify that user is able to select multiple values", () => {
    cy.get("#searchbox").click().type("Aus");
    cy.get(".ui-menu-item").contains("Australia").click();
    cy.get("#searchbox").click().type("ita");
    cy.get(".ui-menu-item").contains("Italy").click();
  });

  it("Verify that the value is not present in dropdown if already selected", () => {
    cy.get("#searchbox").click().type("Italy");
    cy.get(".ui-corner-all").contains("Italy").click();
    cy.get("#searchbox").type("Italy");
    cy.get(".ui-menu-item").should("not.have.value", "Italy");
  });

  it("Verify that user is able to remove the values from autocomplete field", () => {
    cy.get("#searchbox").click().type("Italy");
    cy.get(".ui-corner-all").contains("Italy").click();
    cy.get(".ui-icon").click();

    //Asserting that text is removed
    cy.get("#searchbox").click().should("not.have.data", "text");
  });
});
