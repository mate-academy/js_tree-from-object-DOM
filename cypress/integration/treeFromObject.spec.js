'use strict';

Cypress.Commands.add('haveChildren', (value, number) => {
  cy.contains(value).children().then(($tree) => {
    const treeLength = $tree.children().length;

    expect(treeLength).to.equal(number);
  });
});

describe('Tree from object app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 1 unordered list with 2 list items', () => {
    cy.get('[id = "tree"]').children().children().should('have.length', 2);
  });

  it('should have an <ul> with 2 list items in first list item', () => {
    cy.haveChildren('Drink', 2);
  });

  it('should have an <ul> with 2 list items in second list item', () => {
    cy.haveChildren('Fruit', 2);
  });

  it('should have 2 <li> in each <ul> in Fruits', () => {
    cy.haveChildren('Red', 2);
    cy.haveChildren('Yellow', 2);
  });

  it(`shouldn't have <ul> elements in 3th children`, () => {
    cy.contains('Cherry').children().should('have.length', 0);
    cy.contains('Banana').children().should('have.length', 0);
    cy.contains('Wine').children().should('have.length', 0);
  });
});
