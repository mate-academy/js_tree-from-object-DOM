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
  const list = document.createElement('ul');

  for (const text in data) {
    const item = document.createElement('li');

    item.textContent = text;

    list.append(item);

    createTree(item, data[text]);
  }

  element.append(list);
}

createTree(tree, food);
