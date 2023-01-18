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
  for (const key in data) {
    const list = document.createElement('ul');

    element.append(list);

    const listItem = document.createElement('li');

    list.append(listItem);
    listItem.textContent = key;

    if (typeof data[key] === 'object') {
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);
