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

  for (const key of Object.keys(data)) {
    const listItem = document.createElement('li');

    listItem.textContent = key;
    list.append(listItem);

    if (Object.keys(data[key]).length !== 0) {
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);
