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
  if (typeof data !== 'object' || Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('UL');

  for (const key in data) {
    const li = document.createElement('LI');

    li.innerHTML = key;
    ul.append(li);
    createTree(li, data[key]);
  }

  element.append(ul);
}

createTree(tree, food);
