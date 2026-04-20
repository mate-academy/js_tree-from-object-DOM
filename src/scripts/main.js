'use strict';

// const { createElement } = require('react');

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!element) {
    throw new Error('Tree container not found');
  }

  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return;
  }

  const newUl = document.createElement('ul');

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const newLi = document.createElement('li');

      newLi.textContent = key;

      createTree(newLi, data[key]);

      newUl.append(newLi);
    }
  }

  if (newUl.children.length > 0) {
    element.append(newUl);
  }
}
export { createTree };
createTree(tree, food);
