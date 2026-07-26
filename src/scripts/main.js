/* eslint-disable no-useless-return */
'use strict';

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
  // WRITE YOUR CODE HERE
  if (!data || typeof data !== 'object') {
    return;
  }

  const ulElement = document.createElement('ul');

  for (const key in data) {
    const liElement = document.createElement('li');

    liElement.textContent = key;

    if (typeof data[key] === 'object') {
      createTree(liElement, data[key]);
    }
    ulElement.appendChild(liElement);
  }

  if (ulElement.children.length > 0) {
    element.appendChild(ulElement);
  }
}

createTree(tree, food);
