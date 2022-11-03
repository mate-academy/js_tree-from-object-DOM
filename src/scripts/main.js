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

  for (const prop in data) {
    const item = document.createElement('li');
    const nestedList = data[prop];

    item.textContent = prop;

    if (Object.keys(nestedList).length) {
      createTree(item, nestedList);
    }

    list.append(item);
  }

  element.append(list);
}

createTree(tree, food);
