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

function createTree(element, obj) {
  element.innerHTML = addList(obj);

  return element;
}

function addList(obj) {
  let list = '';
  const arr = Object.entries(obj);

  for (const [key, value] of arr) {
    list += `<li>${key}</li>${addList(value)}`;
  }

  return `<ul>${list}</ul>`;
}

createTree(tree, food);
