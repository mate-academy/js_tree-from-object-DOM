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
  const key = Object.keys(data);
  const val = Object.values(data);

  for (let i = 0; i < key.length; i++) {
    const item = document.createElement('li');

    item.textContent = key[i];
    list.append(item);

    if (Object.keys(val[i]).length !== 0) {
      createTree(list, val[i]);
    }
  }

  element.append(list);
}

createTree(tree, food);
