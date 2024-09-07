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

  for (const key in data) {
    const li = document.createElement('li');

    ul.appendChild(li);
    li.textContent = key;

    if (typeof data[key] === 'object') {
      element.append(ul);
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
