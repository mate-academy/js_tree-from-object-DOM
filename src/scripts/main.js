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
  function buildTree(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');

      li.textContent = key;

      if (typeof obj[key] === 'object') {
        li.appendChild(buildTree(obj[key]));
      }

      ul.appendChild(li);
    }

    return ul;
  }

  document.body.appendChild(buildTree(data));
}

createTree(tree, food);
