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
  for (const key in data) {
    const ul = document.createElement('ul');

    ul.innerHTML = `
      <li>${key}</li>
    `;

    element.append(ul);

    if (Object.keys(key)) {
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);
