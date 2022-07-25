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

  element.append(ulList);

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;
    ulList.append(item);

    if (typeof data[key] === 'object') {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
