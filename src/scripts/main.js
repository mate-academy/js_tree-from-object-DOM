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
  for (const key in data) {
    const value = data[key];
    const li = document.createElement('li');
    const ul = document.createElement('ul');

    li.textContent = key;

    if (Object.keys(value).length > 0) {
      li.appendChild(ul);
    }
    element.appendChild(li);

    if (value !== null && typeof value === 'object') {
      createTree(ul, value);
    }
  }
}

createTree(tree, food);
