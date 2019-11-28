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
  element.innerHTML = createList(data);
};

function createList(obj) {
  let list = '';

  for (const [key, value] of Object.entries(obj)) {
    if (value) {
      list = list + `<li>${key}${createList(value)}</li>`;
    };
  }

  return `<ul>${list}</ul>`;
};

createTree(tree, food);
