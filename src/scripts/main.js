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
  for (const el in data) {
    const ulElement = document.createElement('ul');
    const liElement = document.createElement('li');

    liElement.textContent = el;
    ulElement.appendChild(liElement);
    element.appendChild(ulElement);

    if (Object.keys(data[el]).length > 0) {
      createTree(liElement, data[el]);
    }
  };
}

createTree(tree, food);
