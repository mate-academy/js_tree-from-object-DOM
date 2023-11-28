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

    if (Object.keys(data[key]).length > 0) {
      // Recursively create nested list
      const nestedList = createTree(document.createElement('div'), data[key]);

      liElement.appendChild(nestedList);
    }

    ulElement.appendChild(liElement);
  }

  element.appendChild(ulElement);

  return ulElement;
}

createTree(tree, food);
