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
  for (const el in data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    li.textContent = el;

    if (Object.keys(data[el]).length) {
      createTree(li, data[el]);
    }

    ul.append(li);
    element.append(ul);
  }
}

createTree(tree, food);
