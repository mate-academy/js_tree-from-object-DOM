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
  // WRITE YOUR CODE HERE
  element.innerHTML = createElements(data);
}

function createElements(data) {
  let li = '';
  let ul;

  for (const key in data) {
    li += `
      <li>
        ${key}${createElements(data[key])}
      </li>
    `;
  }

  if (li) {
    ul = `
      <ul>
        ${li}
      </ul>
    `;
  }

  return ul || '';
}

createTree(tree, food);
