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

const genTreeHTML = (obj) => {
  let li = '';

  for (const [key, value] of Object.entries(obj)) {
    li += `<li> ${key} ${genTreeHTML(value)} </li>`;
  }

  return `<ul> ${li} </ul>`;
};

const createTree = (element, data) => {
  element.innerHTML = genTreeHTML(data);
};

createTree(tree, food);
