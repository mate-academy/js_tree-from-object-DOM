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

document.body.setAttribute('id', 'tree');

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!data) {
    return;
  }

  const list = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    createTree(listItem, data[key]);

    list.appendChild(listItem);
  }

  element.appendChild(list);
}

createTree(tree, food);
