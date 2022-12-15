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
debugger;

function createTree(element, data) {
  const createUl = document.createElement('ul');

  for (const key in data) {
    const liEl = document.createElement('li');

    liEl.textContent = key;
    createUl.appendChild(liEl);

    if (Object.keys(data[key]).length !== 0) {
      createTree(liEl, data[key]);
    }
  }
  element.appendChild(createUl);
}

createTree(tree, food);
