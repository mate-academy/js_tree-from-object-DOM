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

  for (const i in data) {
    element.appendChild(ul);

    const li = document.createElement('li');

    li.append(i);
    ul.appendChild(li);

    if (data) {
      createTree(li, data[i]);
    }
  }
}

createTree(tree, food);
