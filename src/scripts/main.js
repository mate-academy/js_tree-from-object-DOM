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
  const ul = document.createElement('ul');
  const keys = Object.keys(data);

  for (const key of keys) {
    const value = data[key];
    const li = document.createElement('li');

    li.textContent = key;

    if (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length > 0
    ) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }
  element.appendChild(ul);
}

createTree(tree, food);
