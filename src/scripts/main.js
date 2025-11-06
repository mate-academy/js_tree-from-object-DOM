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

  for (const key of Object.keys(data)) {
    const value = data[key];

    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (Object.keys(value).length > 0 && value.constructor === Object) {
      createTree(listItem, value);
    }

    list.appendChild(listItem);
  }

  element.appendChild(list);
}

createTree(tree, food);
