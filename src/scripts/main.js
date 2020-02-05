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
  element.innerHTML = createFunc(data);
}

function createFunc(data) {
  let ul;
  let li = '';

  for (const key in data) {
    li += `<li> ${key} ${createFunc(data[key])} </li>`;
  }

  if (li) {
    ul = `<ul> ${li} </ul>`;
  }

  return ul || '';
}

createTree(tree, food);
