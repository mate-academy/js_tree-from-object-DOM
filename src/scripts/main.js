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
  const rootList = document.createElement('ul');

  for (const key in data) {
    const rootListItem = document.createElement('li');

    rootListItem.innerText = key;
    rootList.appendChild(rootListItem);

    if (data[key] !== undefined) {
      createTree(rootListItem, data[key]);
    }
  }

  element.appendChild(rootList);
}

createTree(tree, food);
