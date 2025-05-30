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

  if (keys.length === 0) return;

  const listUl = document.createElement('ul');

  for (const key of keys) {
    const item = document.createElement('li');

    item.textContent = key;

    createTree(item, data[key]);

    listUl.appendChild(item);
  }

  element.appendChild(listUl);
}
tree.innerHTML = '';
createTree(tree, food);
