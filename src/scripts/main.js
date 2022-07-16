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
  const listUl = document.createElement('ul');

  element.append(listUl);

  for (const key in data) {
    const listLi = document.createElement('li');

    listLi.textContent = key;
    listUl.append(listLi);

    if (data[key]) {
      createTree(listLi, data[key]);
    }
  }
}

createTree(tree, food);
