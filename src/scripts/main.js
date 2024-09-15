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
  const list = document.createElement('ul');

  for (const key in data) {
    const internalList = data[key];

    const item = document.createElement('li');

    item.textContent = key;

    if (Object.keys(internalList).length) {
      createTree(item, internalList);
    }

    list.append(item);
  }

  element.append(list);
}

createTree(tree, food);
