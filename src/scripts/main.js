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

  for (let key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    ul.appendChild(li);

    const nestedElement = data[key];

    if (nestedElement) {
      createTree(li, nestedElement);
    }
  }
}

createTree(tree, food);
