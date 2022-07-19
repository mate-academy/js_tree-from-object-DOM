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

  for (const value in data) {
    const item = document.createElement('li');

    item.textContent = value;

    list.append(item);

    if (Object.keys(data[value]).length) {
      createTree(item, data[value]);
    }
  }
}

createTree(tree, food);
