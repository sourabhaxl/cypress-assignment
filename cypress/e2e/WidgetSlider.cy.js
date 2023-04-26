describe("Test to validate the slider", () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Slider.html");
  });

  //Updating the style attribute using the invoke method to update the slider position
  it("drags the slider to 50%", () => {
    cy.get(".ui-slider-handle").invoke("attr", "style", "left: 50%;");
  });
});
