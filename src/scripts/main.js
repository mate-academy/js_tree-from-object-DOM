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

  Object.entries(data).forEach(([ key, object ]) => {
    const item = document.createElement('li');

    item.textContent = key;
    list.appendChild(item);

    if (Object.keys(object).length) {
      createTree(item, object);
    }
  });

  element.appendChild(list);
}

createTree(tree, food);
