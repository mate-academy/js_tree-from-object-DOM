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

  for (const i in data) {
    const item = document.createElement('li');

    list.append(item);
    item.textContent = i;

    const nestedData = Object.keys(data[i]);

    if (nestedData) {
      createTree(item, data[i]);
    }
  }

  element.append(list);
}

createTree(tree, food);
