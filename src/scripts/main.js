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
    <ul></ul>
  `);

  for (const key in data) {
    element.lastElementChild.insertAdjacentHTML('beforeend', `
      <li>${key}</li>
    `);

    if (Object.keys(data[key]).length > 0) {
      createTree(element.lastElementChild.lastElementChild, data[key]);
    }
  };
}

createTree(tree, food);
