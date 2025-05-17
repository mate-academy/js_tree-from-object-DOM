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

const tree = document.createElement('ul');

tree.id = 'tree';
document.body.appendChild(tree);

function createTree(element, data) {
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.appendChild(li);

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      const subUl = document.createElement('ul');

      li.appendChild(subUl);
      createTree(subUl, data[key]);
    }
  }
}

createTree(tree, food);
