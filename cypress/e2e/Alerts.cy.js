describe("Verify the alerts", () => {
  beforeEach(() => cy.visit("https://demo.automationtesting.in/Alerts.html"));

  it("Verify the alert with OK message", () => {
    cy.get(".analystic[href='#OKTab']").click();

    //Validating the message on alert popup
    //Alert messages close automatically by CYPRESS
    cy.on("window:alert", (alertMessage) => {
      expect(alertMessage).to.contain("I am an alert box!");
    });
  });

  it("Verify the alert with OK & cancel button and click on OK button", () => {
    cy.get(":nth-child(2) > .analystic").click();
    cy.get("#CancelTab > .btn").click();

    //Validating the message on alert popup
    cy.on("window:confirm", (alertMessage) => {
      expect(alertMessage).to.contain("Press a Button !");

      //Assert that Ok button is pressed and success message is disaplyed
      cy.get("#demo").should("have.text", "You pressed Ok");
    });
  });

  it("Verify the alert with OK & Cancel button and click on cancel button", () => {
    cy.get(":nth-child(2) > .analystic").click();
    cy.get("#CancelTab > .btn").click();

    //Validating the message on alert popup
    cy.on("window:confirm", (alertMessage) => {
      expect(alertMessage).to.contain("Press a Button !");
    });

    //Cypress closes alert window with cancel button
    cy.on("window:confirm", () => false);

    //Asserting that cancel button is pressed and success message is displayed
    cy.get("#demo").should("have.text", "You Pressed Cancel");
  });

  it("Verify the alert with Textbox by Entering text and validating the success message", () => {
    cy.window().then(($win) => {
      cy.stub($win, "prompt").returns("I am Donald TRUMPH");
      cy.get(":nth-child(3) > .analystic").click();
      cy.get("#Textbox > .btn").click();
      cy.get("#demo1").should(
        "have.text",
        "Hello I am Donald TRUMPH How are you today"
      );
    });

    //cy.on('')

    // Assertion for text is failing because website is returning no text

    //cy.get('#demo1').should('have.text', 'Hello Automation Testing user How are you today')
  });
});
