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
  if (!data || typeof data !== 'object') {
    return null;
  }

  const list = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const listItem = document.createElement('li');

      listItem.textContent = key;
      list.appendChild(listItem);

      if (typeof data[key] === 'object' && data[key] !== null) {
        createTree(listItem, data[key]);
      }

      list.appendChild(listItem);
    }
  }

  element.appendChild(list);
}

createTree(tree, food);
