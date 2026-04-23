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

    if (data[key] && Object.keys(data[key]).length) {
      const nestedUl = document.createElement('ul');

      createTree(nestedUl, data[key]);
      li.appendChild(nestedUl);
    }

    element.appendChild(li);
  }
}

createTree(tree, food);
