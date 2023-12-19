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
  const list1 = document.createElement('ul');

  for (const key in data) {
    const item1 = document.createElement('li');

    item1.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(item1, data[key]);
    }

    list1.append(item1);
  }

  element.append(list1);
}

createTree(tree, food);
