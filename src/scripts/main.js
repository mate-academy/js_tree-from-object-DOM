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
    const listItem = document.createElement('li');

    listItem.textContent = key;

    element.append(list);
    list.append(listItem);

    if (Object.values(data[key]) !== {}) {
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);
