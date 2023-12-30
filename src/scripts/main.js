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
  const ulList = document.createElement('ul');

  for (const key in data) {
    const liItem = document.createElement('li');

    liItem.textContent = key;
    ulList.appendChild(liItem);

    if (typeof data[key] === 'object') {
      createTree(liItem, data[key]);
    }
  }

  element.append(ulList);
}

createTree(tree, food);
