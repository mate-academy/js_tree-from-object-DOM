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
  element.insertAdjacentHTML('beforeend', `
    <ul>
      ${Object.keys(data).map(item => `
        <li class="${item}">${item}
        </li>
      `).join('')}
    </ul>
  `);

  for (const key of Object.keys(data)) {
    if (Object.keys(data[key]).length > 0) {
      createTree(document.getElementsByClassName(key)[0], data[key]);
    }
  }
}

createTree(tree, food);
