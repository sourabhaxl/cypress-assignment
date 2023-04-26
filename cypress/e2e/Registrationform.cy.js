const { fillForm } = require("../page-object/fill-Form");
const { registrationForm } = require("../page-object/register-page");

describe("Test to validate the registration page", () => {
  const register = new registrationForm();
  const fillform = new fillForm();

  it.only("Validates the registration page with valid data", () => {
    register.navigate();
    fillform.validDetails();
  });

  it("Validates the registration page with invalid data", () => {
    register.navigate();
    fillform.invalidDetails();
  });

  it("Validates the registration page with Empty data", () => {
    register.navigate();
    fillform.emptyForm();
    cy.get;
  });
});
