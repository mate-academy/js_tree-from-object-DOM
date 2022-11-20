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
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    const value = data[key];

    if (Object.keys(value).length > 0) {
      createTree(item, value);
    }
  };
}

createTree(tree, food);
