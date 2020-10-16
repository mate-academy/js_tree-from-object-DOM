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
  if (Object.keys(data)) {
    const ulElement = document.createElement('ul');

    element.append(ulElement);

    for (const key in data) {
      const liElement = document.createElement('li');

      liElement.textContent = key;

      ulElement.append(liElement);
      createTree(ulElement, data[key]);
    }
  }
}

createTree(tree, food);
