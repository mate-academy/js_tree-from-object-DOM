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
  const list = document.createElement('ul');

  for (const item in data) {
    const listItem = document.createElement('li');

    listItem.textContent = item;

    if (typeof data[item] === 'object' && Object.keys(data[item]).length > 0) {
      createTree(listItem, data[item]);
    }

    list.appendChild(listItem);
  }
  element.appendChild(list);
}

createTree(tree, food);
