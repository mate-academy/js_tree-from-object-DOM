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
  const wrap = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;
    wrap.appendChild(item);

    if (Object.keys(data[key]).length > 0) {
      item.appendChild(createTree(document.createElement('ul'), data[key]));
    }
  }

  return element.appendChild(wrap);
}

createTree(tree, food);
