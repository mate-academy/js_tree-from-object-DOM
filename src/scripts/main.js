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
  const ulItem = document.createElement('ul');

  for (const i in data) {
    const liItem = document.createElement('li');

    liItem.textContent = i;
    ulItem.append(liItem);
    createTree(liItem, data[i]);
  }
  element.append(ulItem);
}

createTree(tree, food);
