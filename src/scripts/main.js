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
    const isEmpty = Object.keys(data[key]).length === 0;
    const liItem = document.createElement('li');

    liItem.innerHTML = key;

    if (!isEmpty) {
      const liList = document.createElement('ul');

      liItem.append(liList);

      createTree(liList, data[key]);
    }

    element.append(liItem);
  }
}

createTree(tree, food);
