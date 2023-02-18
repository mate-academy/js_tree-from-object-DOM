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

  Object.entries(data).forEach(([key, value]) => {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    if (Object.keys(value).length) {
      createTree(item, value);
    }
  });
}

createTree(tree, food);
