describe("Interacting with windows", () => {
  it("Open a new tabbed window by removing target", () => {
    cy.visit("https://demo.automationtesting.in/Windows.html");

    //Here I am trying to remove the target from href but the solution is not working for some reason on the given site
    cy.contains("click").invoke("removeAttr", "target").click();
    cy.url().should("include", "https://www.selenium.dev/");
  });

  //Test are failing with 2nd approach as well where I am trying to capture href property and navigate to url
  it("Open a new tabbed window by capturing href", () => {
    cy.visit("https://demo.automationtesting.in/Windows.html");

    cy.contains("click").then((e) => {
      const url = e.prop("href");
      cy.visit(url);
    });
    cy.url().should("include", "https://www.selenium.dev/");
  });
});
