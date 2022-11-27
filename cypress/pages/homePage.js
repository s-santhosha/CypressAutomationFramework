/// <reference types="cypress" />

export class HomePage {
  ebayImage = "h1";
  searchField = "input#gh-ac";
  searchResults = ".srp-controls__count-heading";

  open(pageUrl) {
    return cy.visit(pageUrl);
  }

  headerImage() {
    return cy.get(this.ebayImage);
  }

  searchItems(textValue) {
    return cy
      .get(this.searchField)
      .type(textValue + "{enter}", { timeout: 5000 });
  }

  validateSearch(textValue) {
    return cy.get(this.searchResults).should("contain", textValue);
  }
}

export const homePage = new HomePage();
