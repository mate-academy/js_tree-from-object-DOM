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
  Object.entries(data).forEach(([key, value]) => {
    const list = document.createElement('ul');
    const listItem = document.createElement('li');

    listItem.innerText = key;

    element.append(list);
    list.append(listItem);

    createTree(list, value);
  });
}

createTree(tree, food);
