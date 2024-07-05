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
  if (!element || Object.keys(data).length === 0) {
    return;
  }

  const list = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const liEl = document.createElement('li');

    liEl.textContent = key;
    list.append(liEl);
    createTree(list, data[key]);
  }
  element.append(list);
}

createTree(tree, food);
