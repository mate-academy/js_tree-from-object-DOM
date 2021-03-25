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
  if (!Object.keys(data).length) {
    return;
  }

  const list = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.innerText = key;
    list.append(item);

    createTree(list, data[key]);
  }

  element.append(list);
}

createTree(tree, food);
