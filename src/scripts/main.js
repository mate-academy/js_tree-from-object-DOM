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

  element.insertAdjacentElement('beforeend', list);

  const keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {
    const item = document.createElement('li');

    item.innerText = keys[i];
    list.insertAdjacentElement('beforeend', item);

    if ((Object.keys(data[keys[i]])).length !== 0) {
      createTree(item, data[keys[i]]);
    }
  };
};

createTree(tree, food);
