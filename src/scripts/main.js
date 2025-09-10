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

export function createTree(element, data) {
  // Make sure data and element are not null
  if (!element || !data || typeof data !== 'object') {
    return;
  }

  const keys = Object.keys(data);

  // Make sure keys exist
  if (keys.length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (value && typeof value === 'object' && Object.keys(value).length > 0) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  // Append ul element into the container if it is not empty
  if (ul.children.length > 0) {
    element.appendChild(ul);
  }
}

createTree(tree, food);
