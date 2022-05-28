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
  for (const i in data) {
    const ul = document.createElement('ul');

    element.appendChild(ul);

    const li = document.createElement('li');

    ul.appendChild(li);
    li.append(i);

    if (data) {
      createTree(li, data[i]);
    }
  }
}

createTree(tree, food);
