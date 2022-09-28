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
  for (const prop in data) {
    const list = document.createElement('ul');
    const item = document.createElement('li');

    item.textContent = prop;
    list.append(item);
    element.append(list);

    if (typeof data[prop] === 'object') {
      createTree(item, data[prop]);
    }
  }
}

createTree(tree, food);
