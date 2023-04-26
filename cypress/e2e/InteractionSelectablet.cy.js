//Not able to implement

describe("Click on each list item", () => {
  it("clicks every button", () => {
    cy.visit("https://demo.automationtesting.in/Selectable.html");
    cy.get('ul[class="deaultFunc"] > li[class="ui-widget-content"]').then(
      ($el) => {
        for (let count = 1; count <= $el.length; count++) {
          cy.get(".deaultFunc > :nth-child(" + count + ")").click();
        }
      }
    );
  });
});

it("Seraialize CLick on Each button ", () => {
  cy.visit("https://demo.automationtesting.in/Selectable.html");
  cy.get("a[href='#Serialize']").click();
  cy.get('.SerializeFunc > li[class="ui-widget-content"]').then(($el) => {
    for (let count = 1; count <= $el.length; count++) {
      cy.get(".SerializeFunc > :nth-child(" + count + ")").click();
      cy.get(".SerializeFunc > :nth-child(" + count + ")")
        .invoke("text")
        .then(($ele) => {
          cy.get("[id='feedback']").contains($ele.replace("Sakinalium - ", ""));
        });
    }
  });
});
