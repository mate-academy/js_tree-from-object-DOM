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
  if (Object.keys(element).length !== 0) {
    const newList = document.createElement('ul');

    for (const key in element) {
      const newListItem = document.createElement('li');

      data.append(newList);
      newList.append(newListItem);
      newListItem.textContent = key;

      if (Object.keys(element[key]).length !== 0) {
        createTree(element[key], newListItem);
      }
    }
  }
}

createTree(tree, food);
