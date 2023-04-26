describe("Verify the date picker functionality", () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Datepicker.html");
  });

  it("Verrify that user is able to select the date from datepicker", () => {
    cy.get(".imgdp").click();
    cy.get(".ui-datepicker-prev > .ui-icon").click();
    cy.get(":nth-child(1) > :nth-child(4) > .ui-state-default").click(); //I tried to capture the date from the div element and than passing it to a variable perform click action but this does not work as the date box is read-only.
  });
});
