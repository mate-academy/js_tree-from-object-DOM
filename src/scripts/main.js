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

function createTree(table, obj) {
  const ul = document.createElement('ul');

  for (const key in obj) {
    const value = obj[key];
    const li = document.createElement('li');

    li.textContent = key;

    if (value !== null && typeof value === 'object') {
      createTree(li, value);
    }
    ul.appendChild(li);
  }
  table.appendChild(ul);
}

createTree(tree, food);
