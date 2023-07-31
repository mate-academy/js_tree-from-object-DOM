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
  const keys = Object.keys(data);
  const ul = document.createElement('ul');

  if (keys.length === 0) {
    return;
  }

  for (const key of keys) {
    const li = document.createElement('li');

    li.innerHTML = key;

    ul.appendChild(li);

    createTree(li, data[key]);
  }

  element.appendChild(ul);
}

createTree(tree, food);
