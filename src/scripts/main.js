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
  const treeContainer = document.createElement('ul');

  addBranches(treeContainer, data);
  element.append(treeContainer);
}

function addBranches(treeElement, dataElements) {
  for (const key in dataElements) {
    const subtree = dataElements[key];
    const branch = document.createElement('li');

    branch.textContent = key;
    treeElement.append(branch);

    if (Object.entries(subtree).length === 0) {
      continue;
    }

    const list = document.createElement('ul');

    branch.append(list);
    addBranches(list, subtree);
  }
}

createTree(tree, food);
