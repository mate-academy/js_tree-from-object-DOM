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
    const list = document.createElement('li');

    list.textContent = key;
    ul.append(list);

    if (Object.entries(data[key]).length !== 0) {
      createTree(list, data[key]);
    }
  }
  element.append(ul);
}

createTree(tree, food);
