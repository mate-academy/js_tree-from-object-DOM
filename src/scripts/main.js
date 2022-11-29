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
    const listItem = document.createElement('li');

    listItem.textContent = key;
    list.append(listItem);
    element.append(list);

    if (isObject(data[key])) {
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);

function isObject(obj) {
  return typeof obj === 'object';
}
