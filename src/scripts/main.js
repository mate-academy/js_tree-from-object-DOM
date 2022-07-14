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
  const currentUl = document.createElement('ul');

  for (const key in data) {
    const currentLi = document.createElement('li');

    currentLi.innerText = key;

    if (Object.keys(data[key]).length) {
      createTree(currentLi, data[key]);
    }

    currentUl.append(currentLi);
  }

  element.append(currentUl);
}

createTree(tree, food);
