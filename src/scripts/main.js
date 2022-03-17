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
    const liItems = document.createElement('li');

    liItems.innerText = key;

    if (data[key]) {
      createTree(liItems, data[key]);
    }

    list.append(liItems);
    element.append(list);
  }
}

createTree(tree, food);
