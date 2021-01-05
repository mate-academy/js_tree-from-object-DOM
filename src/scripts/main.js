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

  const list = element.appendChild(document.createElement('ul'));

  for (const key in data) {
    const listItem = list.appendChild(document.createElement('li'));

    listItem.innerText = key;

    if (Object.entries(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);
