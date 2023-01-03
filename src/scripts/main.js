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
  const list = document.createElement('ul');

  for (const child in data) {
    const item = document.createElement('li');

    item.textContent = child;

    if (Object.keys(data[child]).length !== 0) {
      createTree(item, data[child]);
    }

    list.append(item);
  }

  element.append(list);
}

createTree(tree, food);
