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

  for (const key in data) {
    if (Object.keys(data[key]).length === 0) {
      str += `<li>${key}</li>`;
    } else {
      str += `<li>${key}${createTree(null, data[key])}</li>`;
    }
  }

  if (element === null) {
    return `<ul>${str}</ul>`;
  }
  element.innerHTML = `<ul>${str}</ul>`;
}

createTree(tree, food);
