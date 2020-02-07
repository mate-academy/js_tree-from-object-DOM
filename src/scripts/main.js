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
  element.innerHTML = createTreeText(data);
}

function createTreeText(data) {
  let liResult = '';
  let ul;

  for (const key in data) {
    liResult += `<li>${key}${createTreeText(data[key])}</li>`;
  }

  if (liResult) {
    ul = `<ul>${liResult}</ul>`;
  }

  return ul || '';
}

createTree(tree, food);
