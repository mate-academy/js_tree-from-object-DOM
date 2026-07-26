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

let tree = document.querySelector('#tree');

if (!tree) {
  tree = document.createElement('ul');
  tree.id = 'tree';
  document.body.appendChild(tree);
}

function createTree(element, data) {
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const nestedTree = document.createElement('ul');

      createTree(nestedTree, data[key]);
      li.appendChild(nestedTree);
    }

    element.appendChild(li);
  }

  return element;
}

createTree(tree, food);
