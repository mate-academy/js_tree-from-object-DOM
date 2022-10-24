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

    const li = document.createElement('li');

    li.textContent = key;
    list.append(li);
    element.append(list);

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
