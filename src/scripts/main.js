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
  const elementUl = document.createElement('ul');

  for (const key in data) {
    const elementLi = document.createElement('li');

    elementLi.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key])) {
      createTree(elementLi, data[key]);
    }

    elementUl.append(elementLi);
  }

  element.append(elementUl);
}

createTree(tree, food);
