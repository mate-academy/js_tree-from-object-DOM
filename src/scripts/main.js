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
  const newList = document.createElement('ul');

  for (const key in data) {
    const listElement = document.createElement('li');

    listElement.textContent = key;

    if (Object.keys(data[key])) {
      createTree(listElement, data[key]);
    }

    newList.append(listElement);
  }

  element.append(newList);
}

createTree(tree, food);
