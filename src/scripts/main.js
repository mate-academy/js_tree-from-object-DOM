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
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    ul.insertAdjacentHTML('beforeend', `
      <li>${key}</li>
    `);

    createTree(ul.lastElementChild, data[key]);
  }

  element.append(ul);
}

createTree(tree, food);
