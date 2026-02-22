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
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const li = document.createElement('li');

      li.textContent = key;

      const value = data[key];

      if (
        typeof value === 'object' &&
        value !== null &&
        Object.keys(value).length > 0
      ) {
        createTree(li, value);
      }

      ul.append(li);
    }
  }

  element.append(ul);
}

createTree(tree, food);
