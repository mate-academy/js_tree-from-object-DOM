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

  for (const item in data) {
    const listItem = document.createElement('li');

    listItem.innerText = item;
    list.append(listItem);

    if (typeof data[item] === 'object') {
      createTree(listItem, data[item]);
    }
  }
  element.append(list);
}

createTree(tree, food);
