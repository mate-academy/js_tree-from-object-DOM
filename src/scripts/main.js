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
}

function createList(data) {
  let list = '';

  for (const key in data) {
    list += `<li>${key}${createList(data[key])}</li>`;
  }

  return list ? `<ul>${list}</ul>` : '';
}

createTree(tree, food);
