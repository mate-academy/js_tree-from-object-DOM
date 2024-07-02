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
  element.append(createBranches(data));
}

const createBranches = (data) => {
  if (!Object.keys(data).length) {
    return;
  }

  const branches = document.createElement('ul');

  for (const element in data) {
    const leaves = document.createElement('li');

    leaves.innerHTML = element;

    const childBranches = createBranches(data[element]);

    if (childBranches) {
      leaves.appendChild(childBranches);
    }

    branches.appendChild(leaves);
  }

  return branches;
};

createTree(tree, food);
