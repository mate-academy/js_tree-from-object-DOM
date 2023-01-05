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
  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in data) {
    const keys = [];

    keys.push(key);

    for (const item of keys) {
      const li = document.createElement('li');

      li.textContent = item;

      ul.append(li);

      createTree(li, data[item]);
    }
  }
}

createTree(tree, food);
