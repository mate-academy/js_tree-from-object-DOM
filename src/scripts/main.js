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
  const createUl = document.createElement('ul');

  for (const key in data) {
    const createLi = document.createElement('li');

    createLi.innerText = key;

    createUl.append(createLi);

    if (Object.keys(data[key]).length > 0) {
      createTree(createLi, data[key]);
    }
  }

  element.append(createUl);
}

createTree(tree, food);
