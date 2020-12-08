'use strict';

Cypress.Commands.add('haveTwoChildren', (value) => {
  cy.contains(value).children().children().should('have.length', 2);
});

describe('Tree from object app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 1 unordered list with 2 list items', () => {
    cy.get('#tree').children().children().should('have.length', 2);
  });

  it('should have an <ul> with 2 list items in first list item', () => {
    cy.haveTwoChildren('Drink');
  });

  it('should have an <ul> with 2 list items in second list item', () => {
    cy.haveTwoChildren('Fruit');
  });

  it('should have 2 <li> in each <ul> in Fruits', () => {
    cy.haveTwoChildren('Red');
    cy.haveTwoChildren('Yellow');
  });

  it(`shouldn't have <ul> elements in 3rd children`, () => {
    cy.contains('Cherry').children().should('have.length', 0);
    cy.contains('Banana').children().should('have.length', 0);
    cy.contains('Wine').children().should('have.length', 0);
  });
});
