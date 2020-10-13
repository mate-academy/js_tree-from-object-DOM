'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  const newUl = document.createElement('ul');

  for (const treeElement in data) {
    const newLi = document.createElement('li');

    newLi.textContent = treeElement;
    newUl.append(newLi);

    if (treeElement) {
      createTree(newLi, data[treeElement]);
    }
  }

  element.append(newUl);
}

createTree(tree, food);
