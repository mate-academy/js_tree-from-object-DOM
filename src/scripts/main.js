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
  element.append(document.createElement('ul'));

  for (const oneObj in data) {
    element.lastElementChild.insertAdjacentHTML('beforeend', `
      <li>
        ${oneObj}
      </li>
    `);

    if (Object.entries(data[oneObj]).length !== 0) {
      createTree(element.lastElementChild.lastElementChild, data[oneObj]);
    }
  }
}

createTree(tree, food);
