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
    const list = document.createElement('li');
    const item = document.createElement('ul');

    list.innerText = key;
    item.append(list);
    element.append(item);

    if (Object.keys(data[key]).length > 0) {
      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
