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

const listGenerator = (data) => {
  let li = '';

  for (const item in data) {
    li += `<li> ${item} ${listGenerator(data[item])} </li>`;
  }

  return li ? `<ul> ${li} </ul>` : '';
};

const createTree = (element, data) => {
  element.innerHTML = listGenerator(data);
};

createTree(tree, food);
