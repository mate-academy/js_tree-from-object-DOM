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

  for (const dataElement in data) {
    const listItem = document.createElement('li');

    list.append(listItem);
    listItem.textContent = dataElement;

    if (data[dataElement] !== {}) {
      createTree(listItem, data[dataElement]);
    }
  }
}

createTree(tree, food);
