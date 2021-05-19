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
  if (Object.keys(data).length === 0) {
    return;
  }

  const list = document.createElement('ul');

  element.appendChild(list);

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;
    list.appendChild(item);
    createTree(item, data[key]);
  }
}

createTree(tree, food);
