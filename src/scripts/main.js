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
    const item = document.createElement('li');

    list.append(item);
    item.textContent = key;

    if (Object.keys(value).length > 0) {
      createTree(item, value);
    }

    element.append(list);
  });
}

createTree(tree, food);
