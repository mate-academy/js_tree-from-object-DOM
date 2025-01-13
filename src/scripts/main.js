/* eslint-disable no-console */

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

const div = document.createElement('div');

div.setAttribute('id', 'tree');
document.body.appendChild(div);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const li = document.createElement('li');

      li.textContent = key;

      if (
        typeof data[key] === 'object' &&
        data[key] !== null &&
        !Array.isArray(data[key]) &&
        Object.keys(data[key]).length > 0
      ) {
        createTree(li, data[key]);
      }

      ul.appendChild(li);
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
