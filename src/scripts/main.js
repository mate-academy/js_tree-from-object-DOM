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
  tree = document.createElement('div');
  tree.id = 'tree';
  document.body.appendChild(tree);
}

function createTree(element, data) {
  const foodTree = document.createElement('ul');

  element.append(foodTree);

  Object.keys(data).forEach((key) => {
    const item = document.createElement('li');

    item.textContent = key;
    foodTree.append(item);

    const nested = data[key];

    if (typeof nested === 'object' && Object.keys(nested).length > 0) {
      createTree(item, nested);
    }
  });
}

createTree(tree, food);
