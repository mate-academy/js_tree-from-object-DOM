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
  const elementUl = document.createElement('ul');

  for (const key in data) {
    const elementLi = document.createElement('li');

    elementLi.textContent = key;
    elementUl.appendChild(elementLi);

    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      Object.keys(data[key]).length !== 0
    ) {
      createTree(elementLi, data[key]);
    }
  }

  element.appendChild(elementUl);
}

createTree(tree, food);
