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
  const contain = document.createElement('ul');

  element.append(contain);

  for (const key in data) {
    const createLi = document.createElement('li');

    createLi.textContent = `${key}`;
    element.firstElementChild.append(createLi);

    if (Object.keys(data[key])) {
      createTree(createLi, data[key]);
    }
  }
}

createTree(tree, food);
