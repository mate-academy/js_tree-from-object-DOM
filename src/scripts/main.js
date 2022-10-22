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
  for (const info in data) {
    const list = document.createElement('ul');
    const listItem = document.createElement('li');

    listItem.textContent = info;
    list.append(listItem);
    element.append(list);

    if (typeof data[info] === 'object') {
      createTree(listItem, data[info]);
    }
  }
}

createTree(tree, food);
