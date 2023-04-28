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
  const children = Object.keys(data);

  if (children.length > 0) {
    const list = document.createElement('ul');

    element.append(list);

    for (const child of children) {
      const item = document.createElement('li');

      list.append(item);
      item.innerText = child;

      createTree(item, data[child]);
    }
  }
}

createTree(tree, food);
