describe("Verify summernote textbox features", () => {
  it("Verify that the text is bold after clicking bold button", () => {
    cy.visit("https://demo.automationtesting.in/SummerNote.html");

    //Typing the text in textbox and selecting the text
    cy.get(".note-editable > p").clear().type("Test text {selectall}");

    //clicking bold button
    cy.get(".note-btn-bold").click();

    //Asserting that the text is bold
    cy.get("b").should("have.css", "font-weight", "700");
  });

  it("Verifies if the text is aligned right", () => {
    cy.visit("https://demo.automationtesting.in/SummerNote.html");

    //Typing the text in textbox and selecting the text
    cy.get(".note-editable > p").clear().type("Test text {selectall}");

    //clicking paragraph button
    cy.get(":nth-child(3) > .dropdown-toggle").click();
    cy.get(
      '[data-original-title="Align right (⌘+⇧+R)"] > .note-icon-align-right'
    ).click({ force: true });

    //Asserting that the text is aligned right
    cy.get(".note-editable > p").should("have.css", "text-align", "right");
  });

  it("Updates the background color and verify the color", () => {
    cy.visit("https://demo.automationtesting.in/SummerNote.html");

    //Typing the text in textbox and selecting the text
    cy.get(".note-editable > p").clear().type("Test text {selectall}");

    //clicking paragraph button
    cy.get(":nth-child(4) > .note-btn-group > .dropdown-toggle").click();
    cy.get(
      ':nth-child(1) > .note-holder > .note-color-palette > :nth-child(2) > [style="background-color:#FF0000"]'
    ).click({ force: true });

    //Asserting the background color
    cy.get("p > span").should("have.css", "background-color", "rgb(255, 0, 0)");
  });

  it("Updates the Foreground color and verify the color", () => {
    cy.visit("https://demo.automationtesting.in/SummerNote.html");

    //Typing the text in textbox and selecting the text
    cy.get(".note-editable > p").clear().type("Test text {selectall}");

    //clicking paragraph button
    cy.get(":nth-child(4) > .note-btn-group > .dropdown-toggle").click();

    //Selecting the color
    cy.get(
      ':nth-child(2) > .note-holder > .note-color-palette > :nth-child(2) > [style="background-color:#FF0000"]'
    ).click({ force: true });

    //Asserting the color
    cy.get("font").should("have.css", "color", "rgb(255, 0, 0)");
  });
});
