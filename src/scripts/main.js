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
  element.append(document.createElement('ul'));

  const parentElement = element.firstElementChild;

  for (const key in data) {
    if (JSON.stringify(data[key]) === '{}') {
      const child = document.createElement('li');

      parentElement.append(child);
      child.textContent = key;
    } else {
      const child = document.createElement('li');

      parentElement.append(child);
      child.textContent = key;
      createTree(child, data[key]);
    }
  }
}

createTree(tree, food);
