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

  element.append(list);

  for (const key in data) {
    const elem = document.createElement('li');

    elem.textContent = key;
    list.append(elem);

    if (Object.keys(data[key]).length > 0) {
      createTree(elem, data[key]);
    }
  }
}

createTree(tree, food);
