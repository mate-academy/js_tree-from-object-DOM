'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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
    return '';
  }

  element.innerHTML = `
  <ul>
    ${Object.keys(data).map(item => `
        <li>
        ${item}
        ${createTree(element, data[item])}
        </li>
    `).join('')}
  </ul>
  `;

  return element.innerHTML;
}

createTree(tree, food);
