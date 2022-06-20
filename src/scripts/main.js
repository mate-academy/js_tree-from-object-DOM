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
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const list = document.createElement('ul');

  element.append(list);

  for (const key of keys) {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);
    createTree(item, data[key]);
  }
}

createTree(tree, food);
