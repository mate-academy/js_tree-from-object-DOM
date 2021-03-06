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

    element.append(ulElement);

    ulElement.append(liElement);
    liElement.innerText = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(liElement, data[key]);
    }
  }
}

createTree(tree, food);
