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

  for (const [key, value] of Object.entries(data)) {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    if (Object.keys(value).length > 0) {
      createTree(item, value);
    }
  }
}

createTree(tree, food);
