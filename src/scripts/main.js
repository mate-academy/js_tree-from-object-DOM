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
  for (const key in data) {
    const itemUl = document.createElement('ul');
    const itemLi = document.createElement('li');

    itemLi.textContent = key;
    itemUl.insertAdjacentElement('beforeend', itemLi);
    element.insertAdjacentElement('beforeend', itemUl);
    createTree(itemLi, data[key]);
  }
};

createTree(tree, food);
