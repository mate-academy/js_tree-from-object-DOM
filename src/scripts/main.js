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

  for (const key in data) {
    if (Object.keys(data).length === 0) {
      return;
    }

    const li = document.createElement('li');

    li.textContent = key;
    createTree(li, data[key]);
    ul.append(li);
  }

  element.append(ul);
}

createTree(tree, food);
