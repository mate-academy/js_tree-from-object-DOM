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
  for (const key in data) {
    const list = document.createElement('ul');
    const listItem = document.createElement('li');

    element.append(list);
    list.append(listItem);
    listItem.innerText = key;

    if (data[key]) {
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);
