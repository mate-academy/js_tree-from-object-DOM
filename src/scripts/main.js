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

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;

    if (Object.keys(data[key]).length) {
      createTree(item, data[key]);
    }

    list.append(item);
  }

  element.append(list);
}

createTree(tree, food);
