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

  for (const key in data) {
    const li = document.createElement('li');

    li.innerHTML = key;
    list.append(li);
    createTree(li, data[key]);
  }

  element.append(list);
}

createTree(tree, food);
