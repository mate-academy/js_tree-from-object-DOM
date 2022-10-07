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

  for (const prop in data) {
    const elem = document.createElement('li');

    elem.textContent = prop;

    if (typeof data[prop] === 'object') {
      createTree(elem, data[prop]);
    }

    list.append(elem);
  }

  element.append(list);
}

createTree(tree, food);
