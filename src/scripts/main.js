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
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return;
  }

  const list = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const listItem = document.createElement('li');

      listItem.textContent = key;
      list.appendChild(listItem);

      if (
        typeof data[key] === 'object' &&
        data[key] !== null &&
        Object.keys(data[key]).length > 0
      ) {
        createTree(listItem, data[key]);
      }
    }
  }

  element.appendChild(list);
}

createTree(tree, food);
