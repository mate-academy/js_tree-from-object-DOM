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

    item.textContent = key;

    list.append(item);

    element.append(list);

    if (Object.values(data[key])) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
