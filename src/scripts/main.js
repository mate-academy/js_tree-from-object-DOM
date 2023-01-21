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
  for (const key in data) {
    const list = document.createElement('ul');
    const listItems = document.createElement('li');

    element.append(list);
    list.append(listItems);
    listItems.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(listItems, data[key]);
    }
  }
}
createTree(tree, food);
