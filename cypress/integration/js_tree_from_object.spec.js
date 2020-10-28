///<reference types=‘cypress’/>
'use strict';

describe('Tests for your list.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Tree should have 1 unordered list with 2 list items.', () => {
    cy.get('ul');
    cy.get('ul').eq(0).children().should('have.length', 2);
  });

  it('First list item should have an unordered list with 2 list items.', () => {
    cy.get('ul > li').eq(0).children().should('have.length', 1);
    cy.get('ul > li > ul').eq(0).children().should('have.length', 2);
  });

  it('Second list item should have an unordered list with 2 list items.', () => {
    cy.get('#tree > :nth-child(1) > :nth-child(2)').children().should('have.length', 1);
    cy.get('ul > li > ul').eq(1).children().should('have.length', 2);
  });

  it('Each list item from second list should have an unordered list with 2 list items.', () => {
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > ul').children().should('have.length', 2);
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > ul').children().should('have.length', 2);
  });

  it('3th child should\'t have <ul></ul> elements.', () => {
    cy.get('#tree > :nth-child(1) > :nth-child(1) > ul > :nth-child(1)').children().should('have.length', 0);
    cy.get('#tree > :nth-child(1) > :nth-child(1) > ul > :nth-child(2)').children().should('have.length', 0);

    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').children().should('have.length', 0);
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').children().should('have.length', 0);
    
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > ul > :nth-child(1)').children().should('have.length', 0);
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(2) > ul > :nth-child(2)').children().should('have.length', 0);
  });
});