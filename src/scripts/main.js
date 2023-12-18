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
  // WRITE YOUR CODE HERE
  const keys = Object.keys(data);
  const list = document.createElement('ul');

  for (const key of keys) {
    const li = document.createElement('li');

    li.textContent = key;
    list.append(li);

    createTree(li, data[key]);

    element.append(list);
  }
}

createTree(tree, food);
