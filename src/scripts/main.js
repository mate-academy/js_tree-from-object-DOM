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

  element.append(list);

  for (const item in data) {
    const listItem = document.createElement('li');

    listItem.textContent = item;

    list.append(listItem);

    if (typeof data[item] === 'object') {
      createTree(list, data[item]);
    }
  }
}

createTree(tree, food);
