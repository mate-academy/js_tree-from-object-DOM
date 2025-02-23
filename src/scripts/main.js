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
    const listItem = document.createElement('li');

    listItem.innerHTML = key;

    element.appendChild(listItem);

    const keys = Object.keys(data[key]);

    if (keys !== 0) {
      const list = document.createElement('ul');

      element.appendChild(list);

      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
