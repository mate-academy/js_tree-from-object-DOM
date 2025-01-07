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
  if (!element || !data) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const li = document.createElement('li');

      li.textContent = key;
      ul.appendChild(li);

      if (Object.keys(data[key]).length > 0) {
        createTree(li, data[key]);
      }
    }
  }
  element.appendChild(ul);
}

createTree(tree, food);
