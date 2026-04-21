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

const tree = document.querySelector('div');

function createTree(element, data) {
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (
      value &&
      typeof value === 'object' &&
      value.constructor === Object &&
      Object.keys(value).length > 0
    ) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

window.createTree = createTree;

createTree(tree, food);
