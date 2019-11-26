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

function createList(data) {
  let li = '';
  let ul = '';

  for (const key in data) {
    li += `<li> ${key} ${createList(data[key])} </li>`;
  };
  ul = li ? `<ul>${li}</ul>` : '';

  return ul;
}

function createTree(element, data) {
  element.innerHTML = createList(data);
}

createTree(tree, food);
