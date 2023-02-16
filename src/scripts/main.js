'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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

function createElement(obj) {
  let list = '';

  for (const key in obj) {
    list += `<li>${key}${createElement(obj[key])}</li>`;
  }

  return list ? `<ul>${list}</ul>` : '';
}

function createTree(element, data) {
  element.innerHTML = createElement(data);
}

createTree(tree, food);
