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

  const list = document.createElement('ul');

  Object.entries(data).forEach(([key, value]) => {
    const item = document.createElement('li');

    item.textContent = key;
    list.appendChild(item);
    createTree(item, value);
    list.appendChild(item);
  });

  element.appendChild(list);
}

createTree(tree, food);
