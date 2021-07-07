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
  const elemUl = document.createElement('ul');
  const arrLi = [];
  let i = 0;

  for (const key in data) {
    arrLi[i] = document.createElement('li');
    arrLi[i].appendChild(document.createTextNode(key));

    if (typeof data[key] === 'object') {
      createTree(arrLi[i], data[key]);
    }
    elemUl.appendChild(arrLi[i]);
    i++;
  }

  element.appendChild(elemUl);
}

createTree(tree, food);
