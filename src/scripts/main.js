'use strict';

const { create } = require("browser-sync");

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
  // WRITE YOUR CODE HERE
  for (const obj in data) {
    const ul = document.createElement('li');
    const li = document.createElement('ul');

    li.textContent = obj;

    if (data[obj] != {}) {
      createTree(li, data[obj]);
    }

    ul.append(li);
    element.append(ul);
  }
}

createTree(tree, food);
