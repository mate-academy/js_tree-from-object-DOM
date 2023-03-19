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
  if (!Object.keys(data).length) {
    return;
  }

  const listElement = document.createElement('ul');

  for (const key in data) {
    const listItemElement = document.createElement('li');

    listItemElement.textContent = key;

    createTree(listItemElement, data[key]);
    listElement.append(listItemElement);
  }

  element.append(listElement);
}

createTree(tree, food);
