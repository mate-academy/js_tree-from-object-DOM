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
  let li = '';

  for (const dish in data) {
    if (data.hasOwnProperty(dish)) {
      li += `<li>${dish}${create(data[dish])}</li>`;
    }
  }

  return `<ul>${li}</ul>`;
}

createTree(tree, food);
