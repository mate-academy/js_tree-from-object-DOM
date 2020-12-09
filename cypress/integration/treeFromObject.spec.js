'use strict';

Cypress.Commands.add('haveChildren', {
  prevSubject: true,
}, (subject, value, number) => {
  if (number > 0) {
    cy.contains(value).children().children().should('have.length', number);
  }

  if (number === 0) {
    cy.contains(value).children().should('have.length', number);
  }

  if (!value) {
    cy.wrap(subject).children().children().should('have.length', 2);
  }
});

describe('Tree from object app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 1 unordered list with 2 list items', () => {
    cy.get('#tree').haveChildren();
  });

  it('should have an <ul> with 2 list items in first list item', () => {
    cy.get('#tree').haveChildren('Drink', 2);
  });

  it('should have an <ul> with 2 list items in second list item', () => {
    cy.get('#tree').haveChildren('Fruit', 2);
  });

  it('should have 2 <li> in each <ul> in Fruits', () => {
    cy.get('#tree').haveChildren('Red', 2);
    cy.get('#tree').haveChildren('Yellow', 2);
  });

  it(`shouldn't have <ul> elements in 3rd children`, () => {
    cy.get('#tree').haveChildren('Cherry', 0);
    cy.get('#tree').haveChildren('Banana', 0);
    cy.get('#tree').haveChildren('Wine', 0);
  });
});
