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
  // WRITE YOUR CODE HERE
  const list = document.createElement('ul');

  for (const item in data) {
    const listItem = document.createElement('li');

    listItem.textContent = item;
    list.append(listItem);

    if (Object.keys(data[item]).length) {
      createTree(listItem, data[item]);
    }
  }
  element.append(list);
}

createTree(tree, food);
