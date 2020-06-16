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
  const newUl = document.createElement('ul');

  element.append(newUl);

  for (const key in data) {
    const newLi = document.createElement('li');

    newLi.innerHTML = key;
    newUl.append(newLi);
    createTree(newUl, data[key]);
  }
}

createTree(tree, food);
