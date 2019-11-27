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
  element.innerHTML = create(data);
}

function create(data) {
  let list = '';

  for (const key in data) {
    list += `<li>${key}${create(data[key])}</li>`;
  }

  return `<ul>${list}</ul>`;
}

createTree(tree, food);
