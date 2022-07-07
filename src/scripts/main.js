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

const root = document.querySelector('#tree');

function createTree(tree, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.innerText = key;
    list.append(item);

    if (typeof data[key] === 'object') {
      createTree(item, data[key]);
    }
    tree.append(list);
  }
}

createTree(root, food);
