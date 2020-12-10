'use strict';

Cypress.Commands.add('haveChildren', {
  prevSubject: true,
}, (subject, number) => {

  cy.wrap(subject).children().children().should('have.length', number);
});

describe('Tree from object app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 1 unordered list with 2 list items', () => {
    cy.get('#tree').haveChildren(2);
  });

  it('should have an <ul> with 2 list items in first list item', () => {
    cy.contains('Drink').haveChildren(2);
  });

  it('should have an <ul> with 2 list items in second list item', () => {
    cy.contains('Fruit').haveChildren(2);
  });

  it('should have 2 <li> in each <ul> in Fruits', () => {
    cy.contains('Red').haveChildren(2);
    cy.contains('Yellow').haveChildren(2);
  });

  it(`shouldn't have <ul> elements in 3rd children`, () => {
    cy.contains('Cherry').children().should('have.length', 0);
    cy.contains('Banana').children().should('have.length', 0);
    cy.contains('Wine').children().should('have.length', 0);
  });
});
