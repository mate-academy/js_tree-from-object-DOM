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
    const li = document.createElement('li');
    const ul = document.createElement('ul');

    li.innerHTML = key;

    ul.append(li);

    element.append(ul);

    if (Object.keys(data[key]).length !== 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
