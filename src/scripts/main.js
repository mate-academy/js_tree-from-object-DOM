'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    ul.append(li);
    li.textContent = key;

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
