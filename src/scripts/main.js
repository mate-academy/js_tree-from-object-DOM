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

function createTree(element, data,) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;
    ul.appendChild(li);
    element.appendChild(ul);
    createTree(ul, data[key]);
  }
};

createTree(tree, food);
