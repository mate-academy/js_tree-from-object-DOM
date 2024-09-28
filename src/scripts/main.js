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
  const branchs = document.createElement('ul');

  for (const key in data) {
    const branch = document.createElement('li');

    branch.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(branch, data[key]);
    }

    branchs.append(branch);
  }

  element.append(branchs);
}

createTree(tree, food);
