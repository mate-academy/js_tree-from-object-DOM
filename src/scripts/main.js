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
  const elemUl = document.createElement('ul');

  element.append(elemUl);

  for (const key in data) {
    const elemLi = document.createElement('li');

    elemLi.textContent = key;
    elemUl.append(elemLi);

    if (typeof data[key] === 'object' && data[key] !== null) {
      createTree(elemUl, data[key]);
    }
  }
}

createTree(tree, food);
