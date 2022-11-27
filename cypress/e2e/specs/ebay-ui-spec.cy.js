import { homePage } from "../../pages/homePage";

describe("Validate Ebay homepage", () => {
  before(() => {
    cy.visit(Cypress.env("ebay-url"));
  });

  it("Validate home page", () => {
    homePage.headerImage().should("be.visible");
  });

  it("Search for mobile phones", () => {
    homePage.searchItems("mobile phones");
    homePage.validateSearch("mobile phones");
  });
});
