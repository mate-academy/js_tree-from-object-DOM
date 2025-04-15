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

  element.append(list);

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;
    list.appendChild(item);

    if (Object.keys(data[key]).length) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
