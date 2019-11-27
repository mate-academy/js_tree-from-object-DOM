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
  element.innerHTML = getList(data);
}

function getList(data) {
  let list = '';

  for (const key in data) {
    list += `<li> ${key} ${getList(data[key])} </li>`;
  }

  if (list) {
    return `<ul> ${list} </ul>`;
  } else {
    return '';
  }
}

createTree(tree, food);
