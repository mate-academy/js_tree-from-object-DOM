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
  const mainList = document.createElement('ul');

  for (const item in data) {
    if (typeof data[item] === 'object') {
      const newItem = document.createElement('li');

      newItem.textContent = item;
      mainList.append(newItem);
      element.append(mainList);
      createTree(newItem, data[item]);
    }
  }
}
createTree(tree, food);
