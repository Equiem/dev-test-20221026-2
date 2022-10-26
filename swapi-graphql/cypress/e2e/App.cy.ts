import fixture from "../fixtures/fixture.json";

describe("SWAPI", () => {
  it("Shows star wars people", () => {
    cy.intercept(
      "POST",
      "https://swapi-graphql.netlify.app/.netlify/functions/index",
    ).as("swapiGraphql");

    cy.visit("http://localhost:3000");

    cy.wait("@swapiGraphql");

    fixture.data.allPeople.edges.forEach(({ node }) => {
      cy.contains("div", node.name)
        .should("exist")
        .within(() => {
          cy.contains("h1", node.name).should("exist");
          cy.contains("p", `Homeworld: ${node.homeworld.name}`).should("exist");
          cy.contains("p", `Skin color: ${node.skinColor}`).should("exist");
        });
    });
  });
});
