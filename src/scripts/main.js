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
  const dataKeys = Object.keys(data);

  if (dataKeys.length === 0) {
    return;
  }

  const list = document.createElement('ul');

  for (const key of dataKeys) {
    const item = document.createElement('li');

    item.textContent = key;
    list.appendChild(item);

    createTree(item, data[key]);
  }

  element.appendChild(list);
}

createTree(tree, food);
