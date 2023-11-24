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
    const item = document.createElement('li');

    item.textContent = prop;

    if (prop.length > 0) {
      createTree(item, data[prop]);
    }
    list.appendChild(item);
  }

  element.appendChild(list);
}

createTree(tree, food);
