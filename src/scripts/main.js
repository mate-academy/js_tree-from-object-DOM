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

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.innerText = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(listItem, data[key]);
    }

    list.append(listItem);
  }
}

createTree(tree, food);
