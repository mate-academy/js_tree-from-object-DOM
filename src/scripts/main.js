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
  if (Object.keys(data).length === 0) {
    return;
  }

  const createUl = document.createElement('ul');

  for (const key in data) {
    const createLi = document.createElement('li');

    createLi.append(key);
    createTree(createLi, data[key]);

    createUl.append(createLi);
  }
  element.append(createUl);
}
createTree(tree, food);
