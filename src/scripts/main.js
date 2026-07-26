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
  if (!data || typeof data !== 'object' || Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    if (typeof data[key] === 'object' && data[key] !== null) {
      if (Object.keys(data[key]).length !== 0) {
        createTree(li, data[key]);
      }
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
