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

function createTree(container, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const li = document.createElement('li');

      li.textContent = key;

      const children = data[key];

      if (children && Object.keys(children).length > 0) {
        createTree(li, children);
      }

      ul.appendChild(li);
    }
  }

  container.appendChild(ul);
}

createTree(tree, food);
