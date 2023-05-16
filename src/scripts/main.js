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
  const list = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (Object.keys(key).length > 0) {
      createTree(listItem, data[key]);
    }

    list.append(listItem);
  }

  element.append(list);
}

createTree(tree, food);
