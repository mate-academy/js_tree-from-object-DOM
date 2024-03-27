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
  const root = document.createElement('ul');

  for (const info in data) {
    const branch = document.createElement('li');

    branch.textContent = info;

    if (Object.keys(data[info]).length > 0) {
      createTree(branch, data[info]);
    }

    root.append(branch);
  }

  if (element) {
    element.append(root);
  } else {
    root.id = 'tree';
    document.body.prepend(root);
  }
}

createTree(tree, food);
