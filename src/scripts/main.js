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
  if (!element || typeof data !== 'object' || data === null) {
    return;
  }

  const list = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (
      data[key] &&
      typeof data[key] === 'object' &&
      Object.keys(data[key]).length > 0
    ) {
      createTree(listItem, data[key]);
    }

    list.appendChild(listItem);
  });

  element.appendChild(list);
}

createTree(tree, food);
