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
  element.innerHTML = createTextTree(data);
}

function createTextTree(data) {
  let li = '';
  let ul;

  for (const key in data) {
    li += `<li> ${key} ${createTextTree(data[key])} </li>`;
  }

  if (li) {
    ul = `<ul> ${li} </ul>`;
  }

  return ul || '';
}

createTree(tree, food);
