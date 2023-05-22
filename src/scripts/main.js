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

  element.append(ulElement);

  for (const mainKey in data) {
    const liElement = document.createElement('li');

    liElement.textContent = mainKey;
    ulElement.append(liElement);

    const extraKeys = Object.keys(data[mainKey]);

    if (extraKeys) {
      createTree(liElement, data[mainKey]);
    }
  }
}

createTree(tree, food);
