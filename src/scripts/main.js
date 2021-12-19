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
  const item = [];
  const i = 0;

  element.append(list);

  for (const key in data) {
    item[i] = document.createElement('li');
    item[i].innerText = key;
    list.append(item[i]);

    if (Object.keys(data[key]).length > 0) {
      createTree(item[i], data[key]);
    }
  }
}

createTree(tree, food);
