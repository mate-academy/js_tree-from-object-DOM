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

  for (const key in data) {
    const item = document.createElement('li');
    const keys = Object.keys(data[key]);

    item.innerHTML = key;

    if (keys.length > 0) {
      createTree(item, data[key]);
    }

    list.append(item);
  }

  element.insertAdjacentElement('beforeend', list);
}

createTree(tree, food);
