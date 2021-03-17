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
  if (Object.keys(element).length === 0) {
    return;
  }

  const newList = document.createElement('ul');

  for (const key in element) {
    const newListItem = document.createElement('li');

    data.append(newList);
    newList.append(newListItem);
    newListItem.textContent = key;
    createTree(element[key], newListItem);
  }
}

createTree(tree, food);
