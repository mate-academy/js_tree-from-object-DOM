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

  for (const branch in data) {
    const item = document.createElement('li');

    item.textContent = branch;

    if (Object.keys(branch) !== 0) {
      createTree(item, data[branch]);
    }

    list.append(item);
  }

  element.append(list);
}

createTree(tree, food);
