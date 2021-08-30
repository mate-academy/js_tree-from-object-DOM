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
  const newList = document.createElement('ul');

  for (const x in data) {
    const newItem = document.createElement('li');

    newItem.innerText = x;
    newList.append(newItem);

    if (typeof data[x] === 'object') {
      createTree(newItem, data[x]);
    }
  }
  element.append(newList);
}

createTree(tree, food);
