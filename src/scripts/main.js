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

    element.appendChild(ul);
    li.textContent = el;
    ul.appendChild(li);

    if (Object.keys(el, data[el] !== undefined)) {
      createTree(li, data[el]);
    }
  }
}

createTree(tree, food);
