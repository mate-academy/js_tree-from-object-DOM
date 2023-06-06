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

    liElement.innerText = key;

    ulElement.append(liElement);

    const dataKey = data[key];

    if (Object.keys(dataKey).length > 0) {
      createTree(liElement, dataKey);
    }
  }

  element.append(ulElement);
}

createTree(tree, food);
