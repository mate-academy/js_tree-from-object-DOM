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

  for (const [key, value] of Object.entries(data)) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (typeof value === 'object') {
      createTree(listItem, value);
    };

    list.append(listItem);
  };

  element.append(list);
}

createTree(tree, food);
