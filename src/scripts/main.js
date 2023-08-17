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
  const dataKeys = Object.keys(data);
  const ul = document.createElement('ul');

  if (dataKeys.length) {
    return;
  }

  for (const key of dataKeys) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);
    createTree(li, data[key]);
  }

  element.appendChild(ul);
};

createTree(tree, food);
