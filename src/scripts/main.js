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

function createTree(node, object) {
  const list = document.createElement('ul');

  for (const child in object) {
    const item = document.createElement('li');

    item.innerHTML = child;

    if (Object.keys(object[child]).length !== 0) {
      createTree(item, object[child]);
    }
    list.appendChild(item);
  }
  node.appendChild(list);
}

createTree(tree, food);
