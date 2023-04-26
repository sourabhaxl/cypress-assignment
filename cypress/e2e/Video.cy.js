import "cypress-iframe";
describe("Verify that video is playing", () => {
  it("Verify that youtube video is playing", () => {
    cy.visit("https://demo.automationtesting.in/Youtube.html");
    cy.frameLoaded(".col-xs-9 > iframe");
    cy.frameLoaded(".col-xs-9 > iframe").should(
      "have.attr",
      "src",
      "https://www.youtube.com/embed/wPECeNP1BoY"
    );
    cy.iframe(".col-xs-9 > iframe").click();
    // cy.iframe('.col-xs-9 > iframe').should('have')
    //Not able to assert if video is playing or paused
  });

  it("Verify that vimeo video is playing", () => {
    cy.visit("https://demo.automationtesting.in/Vimeo.html");
    cy.frameLoaded("#foo");
    cy.iframe("#foo").click();

    //Not able to assert if video is playing or paused
  });
});
