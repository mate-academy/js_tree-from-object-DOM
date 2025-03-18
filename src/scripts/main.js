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
    if (typeof data[key] === 'object') {
      const ul = document.createElement('ul');

      element.appendChild(ul);

      const li = document.createElement('li');

      li.textContent = key;
      ul.appendChild(li);
      createTree(ul, data[key]);
    } else {
      const li = document.createElement('li');

      li.textContent = key;

      element.appendChild(li);
    }
  }
}

createTree(tree, food);
