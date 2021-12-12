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

  for (const item in data) {
    const liElement = document.createElement('li');

    liElement.textContent = item;
    ulElement.append(liElement);

    if (Object.keys(data[item]).length > 0) {
      createTree(liElement, data[item]);
    }
  }
}

createTree(tree, food);
