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
  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;
    element.appendChild(li);

    if (Object.keys(value).length === 0) {
      continue;
    }

    const ul = document.createElement('ul');

    createTree(ul, value);
    li.appendChild(ul);
  }
}

createTree(tree, food);
