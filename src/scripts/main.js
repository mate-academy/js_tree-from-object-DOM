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
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      const nestedUl = document.createElement('ul');

      createTree(nestedUl, data[key]);
      li.appendChild(nestedUl);
    }

    element.appendChild(li);
  }
}

createTree(tree, food);
