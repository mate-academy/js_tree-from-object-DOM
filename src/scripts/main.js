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
  const thisUl = document.createElement('ul');

  element.append(thisUl);

  for (const item in data) {
    const newItem = document.createElement('li');

    newItem.innerHTML = item;

    thisUl.append(newItem);

    const a = data[item];

    if (a.length !== 0) {
      createTree(newItem, data[item]);
    }
  }
}

createTree(tree, food);
