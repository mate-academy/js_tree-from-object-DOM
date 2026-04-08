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

  const goodsList = document.createElement('ul');

  for (const good in data) {
    const goodItem = document.createElement('li');

    goodItem.textContent = good;

    goodsList.appendChild(goodItem);

    createTree(goodItem, data[good]);
  }

  element.appendChild(goodsList);
}

createTree(tree, food);
