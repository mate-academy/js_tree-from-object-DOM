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

  element.appendChild(list);

  for (let i = 0; i < Object.values(data).length; i++) {
    const item = document.createElement('li');

    item.innerText = ` ${Object.keys(data)[i]}`;

    list.appendChild(item);

    if (Object.values(data).length >= 1) {
      createTree(item, Object.values(data)[i]);
    }
  }
}

createTree(tree, food);
