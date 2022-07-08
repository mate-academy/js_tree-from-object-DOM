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

  for (const key in data) {
    const listLi = document.createElement('li');

    listLi.innerText = key;

    if (Object.keys(data[key]).length) {
      createTree(listLi, data[key]);
    }

    listUl.append(listLi);
  }

  element.append(listUl);
}

createTree(tree, food);
