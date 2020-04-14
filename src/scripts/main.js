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
  let str = '';

  Object.entries(data).forEach(([key, value], index) => {
    if (Object.keys(value).length === 0) {
      str += `<li>${key}</li>`;
    } else {
      str += `<li>${key}${createTree(element, value)}</li>`;
    }
  });

  element.innerHTML = `<ul>${str}</ul>`;

  return `<ul>${str}</ul>`;
}

createTree(tree, food);
