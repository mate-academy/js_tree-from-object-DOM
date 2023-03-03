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
  element.innerHTML = createContent(data);
}

function createContent(obj) {
  let li = '';
  let ul;

  for (const key in obj) {
    li += `
      <li>
        ${key}
        ${createContent(obj[key])}
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
