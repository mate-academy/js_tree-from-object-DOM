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
  for (const key of Object.keys(data)) {
    const list = document.createElement('ul');
    const item = document.createElement('li');

    item.innerText = key;
    list.append(item);
    element.append(list);

    if (Object.keys(data[key]).length > 0) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);