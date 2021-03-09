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
  const ul = document.createElement('ul');

  element.append(ul);

  const parentElement = element.firstElementChild;

  for (const key in data) {
    const child = document.createElement('li');

    parentElement.append(child);
    child.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(child, data[key]);
    }
  }
}

createTree(tree, food);
