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
    const item = document.createElement('li');

    item.innerText = key;
    list.append(item);

    if (typeof data[key] === 'object') {
      createTree(item, data[key]);
    }
    element.append(list);
  }
}

createTree(tree, food);
