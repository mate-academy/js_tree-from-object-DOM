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

  for (const item in data) {
    const li = document.createElement('li');

    li.textContent = item;
    ul.append(li);

    if (typeof data[item] === 'object') {
      createTree(li, data[item]);
    }
  }
}

createTree(tree, food);
