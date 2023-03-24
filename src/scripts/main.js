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

  for (const key in data) {
    const liElement = document.createElement('li');

    liElement.textContent = key;
    ulElement.append(liElement);

    const hasNestedElements = Object.keys(data[key]).length > 0;

    if (hasNestedElements) {
      createTree(liElement, data[key]);
    }
  }

  element.append(ulElement);
}

createTree(tree, food);
