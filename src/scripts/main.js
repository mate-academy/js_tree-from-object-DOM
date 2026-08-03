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
  if (Object.keys(data).length === 0) {
    return;
  }

  const ulItem1 = document.createElement('ul');

  element.appendChild(ulItem1);

  for (const key of Object.keys(data)) {
    const liItem = document.createElement('li');

    liItem.textContent = key;

    ulItem1.appendChild(liItem);

    createTree(liItem, data[key]);
  }
}

createTree(tree, food);
