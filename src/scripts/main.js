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

  const list = document.createElement('ul');

  for (const value in data) {
    element.append(list);

    const li = document.createElement('li');

    li.textContent = value;
    list.append(li);

    createTree(li, data[value]);
  }
}

createTree(tree, food);
