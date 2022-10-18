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
    const itemsList = document.createElement('li');

    itemsList.textContent = key;
    list.append(itemsList);
    element.append(list);

    if (typeof data[key] === 'object') {
      createTree(itemsList, data[key]);
    }
  }
}

createTree(tree, food);
