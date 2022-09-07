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
  if (Object.keys(data).length === 0) {
    return;
  }

  const list = document.createElement('ul');

  for (const product in data) {
    const item = document.createElement('li');

    item.innerHTML = `${product}`;
    list.append(item);
    createTree(item, data[product]);
  }
  element.append(list);
}

createTree(tree, food);
