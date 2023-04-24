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
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
