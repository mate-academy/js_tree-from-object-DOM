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
  // WRITE YOUR CODE HERE
  for (const entry in data) {
    const mainlist = document.createElement('ul');
    const listItem = document.createElement('li');

    listItem.textContent = entry;
    mainlist.append(listItem);

    if (typeof data[entry] === 'object') {
      createTree(listItem, data[entry]);
    }
    element.append(mainlist);
  }
};

createTree(tree, food);
