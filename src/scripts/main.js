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
  const ulElement = document.createElement('ul');

  element.appendChild(ulElement);

  for (const key of Object.keys(data)) {
    const liElement = document.createElement('li');

    ulElement.appendChild(liElement);
    liElement.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(liElement, data[key]);
    }
  }
}

createTree(tree, food);
