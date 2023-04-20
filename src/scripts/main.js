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

  for (const key in data) {
    if (typeof (data[key]) === 'object') {
      const part = document.createElement('li');

      part.innerHTML = key;
      list.append(part);
      element.append(list);
      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
