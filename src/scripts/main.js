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
    const ul = document.createElement('ul');

    element.append(ul);

    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }
  }// WRITE YOUR CODE HERE
}

createTree(tree, food);
