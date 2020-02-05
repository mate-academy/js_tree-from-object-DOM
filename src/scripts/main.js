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

const createList = (data) => {
  let li = '';

  for (const key in data) {
    li += `<li> ${key} ${createList(data[key])}</li>`;
  }

  return li ? `<ul>${li}</ul>` : '';
};

createTree(tree, food);
