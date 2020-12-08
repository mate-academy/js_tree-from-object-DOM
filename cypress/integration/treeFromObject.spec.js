'use strict';

Cypress.Commands.add('haveChildren', (value) => {
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
    cy.haveChildren('Drink');
  });

  it('should have an <ul> with 2 list items in second list item', () => {
    cy.haveChildren('Fruit');
  });

  it('should have 2 <li> in each <ul> in Fruits', () => {
    cy.haveChildren('Red');
    cy.haveChildren('Yellow');
  });

  it(`shouldn't have <ul> elements in 3rd children`, () => {
    cy.contains('Cherry').children().should('have.length', 0);
    cy.contains('Banana').children().should('have.length', 0);
    cy.contains('Wine').children().should('have.length', 0);
  });
});
