describe("Resizes the given window", () => {
  it("Resize the window", () => {
    cy.visit("https://demo.automationtesting.in/Resizable.html");

    cy.get(".ui-resizable-se")
      .click()
      .trigger("mousedown", { which: 1, pageX: 100, pageY: 100 })
      .trigger("mousemove", { which: 1, pageX: 700, pageY: 282 })
      .trigger("mouseup");

    //Assertion to validate the set size
    cy.get("#resizable").should(
      "have.attr",
      "style",
      "width: 599px; height: 282px;"
    );
  });
});
