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

  for (const value in data) {
    const li = document.createElement('li');

    li.textContent = value;

    ul.append(li);

    if (typeof data[value] === 'object') {
      createTree(ul, data[value]);
    }
  }

  element.append(ul);
}

createTree(tree, food);
