'use strict';

Cypress.Commands.add('haveChild', (value, number) => {
  cy.contains(value).children().then(($tree) => {
    const tree = $tree.get(0).children.length;

    expect(tree).to.equal(number);
  });
});

Cypress.Commands.add('notHaveChild', (value, number) => {
  cy.contains(value).then(($tree) => {
    const tree = $tree.get(0).children.length;

    expect(tree).to.equal(number);
  });
});

describe('Tree from object app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 1 unordered list with 2 list items', () => {
    cy.get('[id = "tree"]').children().then(($tree) => {
      const tree = $tree.get(0).children.length;

      expect(tree).to.equal(2);
    });
  });

  it('should have an <ul> with 2 list items in first list item', () => {
    cy.haveChild('Meat', 2);
  });

  it('should have an <ul> with 2 list items in second list item', () => {
    cy.haveChild('Fruit', 2);
  });

  it('should have 2 <li> in each <ul> in Fruits', () => {
    cy.haveChild('Red', 2);
    cy.haveChild('Yellow', 2);
  });

  it('should\'t have <ul> elements in 3th children', () => {
    cy.notHaveChild('Pork', 0);
    cy.notHaveChild('Cherry', 0);
    cy.notHaveChild('Banana', 0);
  });
});
