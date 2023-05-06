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

  element.appendChild(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key])) {
      createTree(li, data[key]);
    }
    ul.appendChild(li);
  };

  // WRITE YOUR CODE HERE
}

createTree(tree, food);
