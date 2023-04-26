describe("Verify that accordions expand and collapse on click action", () => {
  beforeEach(() =>
    cy.visit("https://demo.automationtesting.in/Accordion.html")
  );

  it("Verify that only 4 accordions are present", () => {
    cy.get(".panel-default").should("have.length", 4);
  });

  it("Verify that the first accordion is expanded by default", () => {
    //Asserting with the text
    cy.get("#collapse1 > .panel-body").should(
      "contain.text",
      "This Automation Testing API"
    );

    //Asserting with class
    cy.get("#collapse1").should("have.class", "panel-collapse collapse in");
  });

  it("Collapse the first accordion", () => {
    cy.get(":nth-child(1) > .panel-heading > .panel-title").click();
    //Asserting with class
    cy.get("#collapse1").should("have.class", "panel-collapse collapse");
  });

  it("Expands the second accordion", () => {
    cy.get(":nth-child(2) > .panel-heading > .panel-title").click();

    //Asserting that accordion is Expanded

    cy.get("#collapse2").should("have.class", "panel-collapse collapse in");
  });

  it("Collapse the second accordion", () => {
    cy.get(":nth-child(2) > .panel-heading > .panel-title").click();

    //Asserting that accordion is Collapsed

    cy.get("#collapse2").should("have.class", "panel-collapse collapse");
  });

  it("Expands the third accordion", () => {
    cy.get(":nth-child(3) > .panel-heading > .panel-title").click();

    //Asserting that accordion is Expanded

    cy.get("#collapse3").should("have.class", "panel-collapse collapse in");
  });

  it("Collapse the third accordion", () => {
    cy.get(":nth-child(3) > .panel-heading > .panel-title").click();

    //Asserting that accordion is Collapsed

    cy.get("#collapse3").should("have.class", "panel-collapse collapse");
  });

  it("Expands the fourth accordion", () => {
    cy.get(":nth-child(4) > .panel-heading > .panel-title").click();

    //Asserting that accordion is Expanded

    cy.get("#collapse4").should("have.class", "panel-collapse collapse in");
  });

  it("Collapse the fourth accordion", () => {
    cy.get(":nth-child(4) > .panel-heading > .panel-title").click();

    //Asserting that accordion is Collapsed

    cy.get("#collapse4").should("have.class", "panel-collapse collapse");
  });
});
