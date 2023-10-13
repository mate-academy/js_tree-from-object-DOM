/* eslint-disable no-undef */
'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  function buildBranch(parentElement, branchData) {
    Object.keys(branchData).forEach(product => {
      const branch = document.createElement('li');

      branch.innerText = product;
      parentElement.append(branch);

      if (typeof branchData[product] === 'object') {
        const sublist = document.createElement('ul');

        branch.append(sublist);
        buildBranch(sublist, branchData[product]);
      }
    });
  }

  buildBranch(list, data);
}

createTree(tree, food);
