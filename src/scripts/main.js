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
  const uList = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.innerHTML = key;
    uList.append(listItem);

    if (Object.keys(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }
  }

  element.append(uList);
}

createTree(tree, food);
