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
  const x = data;

  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in x) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    createTree(li, x[key]);
  };
};

createTree(tree, food);
