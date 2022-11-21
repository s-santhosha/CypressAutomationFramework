/// <reference types="Cypress" />

describe("Pet Store api tests", () => {
  const petID = 15;

  it("Add new pet information by id", () => {
    cy.fixture("pet").then((myFixture) => {
      cy.request({
        method: "POST",
        url: Cypress.env("api-endpoint"),
        body: myFixture,
      }).then((res) => {
        expect(res.status).to.equal(200);
      });
    });
  });

  it("find pet by id", () => {
    cy.request({
      method: "GET",
      url: Cypress.env("api-endpoint") + `/${petID}`,
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("name");
      expect(res.body).to.have.property("id");
      cy.log(res.body);
    });
  });

  it("update existing pet name", () => {
    cy.fixture("update-pet").then((updateFixture) => {
      cy.request({
        method: "POST",
        url: Cypress.env("api-endpoint") + `/${petID}`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        content: "application/x-www-form-urlencoded",
        body: updateFixture,
      }).then((res) => {
        expect(res.status).to.equal(200);
      });
    });
  });

  it("delete pet by id", () => {
    cy.request({
      method: "DELETE",
      url: Cypress.env("api-endpoint") + `/${petID}`,
    }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).has.property(
        "message",
        `${petID}`,
        "deleted from petstore"
      );
    });
  });
});
