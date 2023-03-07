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
    const liElem = document.createElement('li');

    liElem.textContent = key;
    list.appendChild(liElem);

    if (Object.keys(data[key]).length) {
      createTree(liElem, data[key]);
    }
  }
  element.appendChild(list);
}

createTree(tree, food);
