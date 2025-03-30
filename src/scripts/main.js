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
  const listElement = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (typeof value === 'object' && Object.keys(value).length > 0) {
      createTree(listItem, value);
    }

    listElement.appendChild(listItem);
  }

  element.appendChild(listElement);
}

createTree(tree, food);
