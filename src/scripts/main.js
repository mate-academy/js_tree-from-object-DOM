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
  for (const d in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = d;

    if (Object.keys(data[d]).length) {
      createTree(li, data[d]);
    }

    ul.append(li);
    element.append(ul);
  }
}

createTree(tree, food);
