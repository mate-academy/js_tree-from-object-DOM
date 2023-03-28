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

  element.appendChild(ul);

  for (const key of Object.keys(data)) {
    const li = document.createElement('li');

    if (typeof data[key] === 'object') {
      li.textContent = key;
      createTree(li, data[key]);
    }

    ul.appendChild(li);
  }
}

createTree(tree, food);
