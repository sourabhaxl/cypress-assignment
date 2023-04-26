describe("Verify JQUery progress", () => {
  it("Clicks on download and verifing the labels on the progress bar", () => {
    cy.visit("https://demo.automationtesting.in/JqueryProgressBar.html");
    cy.contains("Start Download").click();
    cy.get(".ui-dialog").should("be.visible");

    //Asserting with text
    cy.get(".progress-label")
      .wait(3000)
      .then(($progress) => {
        if ($progress.text().includes("Current Progress")) {
          cy.log("Download in progress");
        } else {
          cy.log("Download Completed");
        }
      });
  });
  it("Verify that the download is completed", () => {
    cy.visit("https://demo.automationtesting.in/JqueryProgressBar.html");
    cy.contains("Start Download").click().wait(5000);
    cy.get(".progress-label").should("have.text", "Complete!");
    cy.get(".ui-dialog-buttonset > button").should("be.visible");
  });

  it("Cancels the download", () => {
    cy.visit("https://demo.automationtesting.in/JqueryProgressBar.html");
    cy.contains("Start Download").click().wait(3000);
    cy.contains("Cancel Download").click();
    cy.get("#downloadButton").should("be.visible");
  });
});
