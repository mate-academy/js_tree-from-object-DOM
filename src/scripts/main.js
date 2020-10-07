'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  for (const key in data) {
    const liElement = document.createElement('li');
    const ulElement = document.createElement('ul');

    if (typeof data[key] === 'object') {
      element.appendChild(liElement);
      liElement.textContent = key;

      liElement.appendChild(ulElement);

      createTree(ulElement, data[key]);
    } else {
      element.appendChild(liElement);
      liElement.textContent = data[key];
    }
  }
}

createTree(tree, food);
