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
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      !Array.isArray(data[key]) &&
      Object.keys(data[key]).length > 0
    ) {
      const ul = document.createElement('ul');

      li.appendChild(ul);
      createTree(ul, data[key]);
    }
    element.insertAdjacentElement('beforeend', li);
  }
}

createTree(tree, food);
