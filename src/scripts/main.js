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
  for (const key in data) {
    if (!element) {
      return;
    }

    const listItem = document.createElement('li');

    listItem.textContent = key;
    element.append(listItem);

    if (Object.keys(data[key]).length !== 0 && typeof data[key] === 'object') {
      const list = document.createElement('ul');

      listItem.append(list);

      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
