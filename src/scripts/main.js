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

createTree(tree, food);

function createTree(element, data) {
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const list = document.createElement('ul');

  keys.forEach((key) => {
    const item = document.createElement('li');

    item.textContent = key;

    createTree(item, data[key]);
    list.appendChild(item);
  });

  element.appendChild(list);
}
