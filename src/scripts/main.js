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
  for (const key in data) {
    const list = document.createElement('ul');
    const li = document.createElement('li');

    element.append(list);
    li.textContent = key;
    list.append(li);

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
