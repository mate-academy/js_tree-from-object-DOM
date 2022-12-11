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
  const ulElem = document.createElement('ul');

  for (const key in data) {
    const liElem = document.createElement('li');

    liElem.textContent = key;
    ulElem.appendChild(liElem);

    if (Object.keys(data[key]).length !== 0) {
      createTree(liElem, data[key]);
    }
  }

  element.appendChild(ulElem);
}

createTree(tree, food);
