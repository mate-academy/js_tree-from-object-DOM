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

const treeMaker = function(data) {
  let li = '';

  for (const item in data) {
    li += `<li> ${item} ${treeMaker(data[item])} </li>`;
  }

  return li ? `<ul>${li}</ul>` : '';
};

function createTree(element, data) {
  element.innerHTML = treeMaker(data);
}

createTree(tree, food);
