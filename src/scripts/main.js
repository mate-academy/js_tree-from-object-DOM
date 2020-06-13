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
  element.innerHTML += addElements(data);

  function addElements(obj) {
    if (Object.keys(obj).length === 0) {
      return '';
    } else {
      return `
      <ul>
          ${Object.keys(obj).map(item => `
            <li>
              ${item}
            </li>
            ${addElements(obj[item])}
          `
  ).join('')}
      </ul>
      `;
    }
  }

  return element.innerHTML;
}

createTree(tree, food);
