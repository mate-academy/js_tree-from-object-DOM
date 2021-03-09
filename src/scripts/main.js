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
  const localList = document.createElement('ul');

  for (const key in data) {
    const listElement = document.createElement('li');

    listElement.innerText = key;

    localList.append(listElement);

    if (typeof data[key] === 'object') {
      createTree(localList, data[key]);
    }
  }
  element.append(localList);
}

createTree(tree, food);
