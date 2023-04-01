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
  const item = document.createElement(('ul'));

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;
    item.append(li);

    if (typeof data[key] === 'object') {
      createTree(item, data[key]);
    }
  }

  element.append(item);
}

createTree(tree, food);
