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

const body = document.querySelector('body');
const tree = document.createElement('ul');

tree.className = 'tree';
tree.id = 'tree';
body.appendChild(tree);

function createTree(element, data) {
  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;
    element.appendChild(li);

    const isObject =
      value !== null &&
      typeof value === 'object' &&
      Object.keys(value).length > 0;

    if (isObject) {
      const ul = document.createElement('ul');

      li.appendChild(ul);
      createTree(ul, value);
    }
  }
}

createTree(tree, food);
