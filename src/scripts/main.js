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
    const item = document.createElement('li');

    element.append(list);
    list.append(item);
    item.textContent = key;

    if (Object.keys(data[key])) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
