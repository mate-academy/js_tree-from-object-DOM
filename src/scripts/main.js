'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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

  for (const key in data) {
    const newItem = document.createElement('li');

    newItem.textContent = key;
    newUl.append(newItem);

    if (data[key] === undefined) {
      newUl.append(newItem);
    } else {
      createTree(newUl, data[key]);
    };
  }
  element.append(newUl);
}

createTree(tree, food);
