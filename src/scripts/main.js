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
  const newTree = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }
    newTree.appendChild(listItem);
  }
  element.appendChild(newTree);
}

createTree(tree, food);
