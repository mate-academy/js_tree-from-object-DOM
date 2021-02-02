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
  const uList = document.createElement('UL');

  for (const key in data) {
    const listItem = document.createElement('LI');

    listItem.textContent = key;
    uList.appendChild(listItem);

    if (Object.keys(data[key]).length !== 0) {
      createTree(listItem, data[key]);
    }
  }

  element.appendChild(uList);
}

createTree(tree, food);
