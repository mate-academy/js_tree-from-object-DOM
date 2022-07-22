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

  for (const key in data) {
    const li = document.createElement('li');

    li.innerText = key;
    list.append(li);

    if (typeof data[key] === 'object') {
      createTree(list, data[key]);
    }
  }

  element.append(list);
}

createTree(tree, food);
