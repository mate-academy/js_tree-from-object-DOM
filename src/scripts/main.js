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
  const keys = Object.keys(data);

  if (keys.length > 0) {
    const list = document.createElement('ul');

    for (const key of keys) {
      const item = document.createElement('li');

      item.innerHTML = key;

      list.appendChild(item);

      createTree(item, data[key]);
    }

    element.appendChild(list);
  }
}

createTree(tree, food);
