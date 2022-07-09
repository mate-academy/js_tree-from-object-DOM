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
    const listItem = document.createElement('li');

    listItem.innerText = [key];

    list.append(listItem);
    element.append(list);

    if (Object.keys(data[key]).length !== 0) {
      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
