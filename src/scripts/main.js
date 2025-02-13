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
    const ulItem = document.createElement('ul');
    const liItem = document.createElement('li');

    liItem.textContent = key;
    ulItem.append(liItem);
    element.append(ulItem);

    if (typeof data[key] === 'object' && data[key] !== null) {
      createTree(liItem, data[key]);
    }
  }
}

createTree(tree, food);
