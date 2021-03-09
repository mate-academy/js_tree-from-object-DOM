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
    const item = document.createElement('li');
    const list = document.createElement('ul');

    item.innerText = key;
    list.append(item);

    if (typeof data[key] === 'object') {
      createTree(item, data[key]);
    }
    element.append(list);
  }
}

createTree(tree, food);
