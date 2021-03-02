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
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;
    ul.append(li);

    element.append(ul);

    createTree(li, data[key]);
  }
}
createTree(tree, food);
