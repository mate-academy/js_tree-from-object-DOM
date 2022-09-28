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
    const row = document.createElement('li');

    row.textContent = key;
    list.appendChild(row);

    if (Object.keys(data[key]).length > 0) {
      createTree(row, data[key]);
    }
  }

  element.append(list);
}

createTree(tree, food);
