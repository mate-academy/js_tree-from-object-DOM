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

  const elUl = document.createElement('ul');

  for (const key in data) {
    const elLi = document.createElement('li');

    elLi.append(key);

    createTree(elLi, data[key]);

    elUl.append(elLi);
  }
  element.append(elUl);
}

createTree(tree, food);
