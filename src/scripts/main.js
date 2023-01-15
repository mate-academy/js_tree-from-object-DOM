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
    const listItem = document.createElement('li');

    listItem.innerText = key;

    element.append(listItem);

    if (Object.keys(data[key]).length !== 0) {
      const list = document.createElement('ul');

      createTree(list, data[key]);
      listItem.append(list);
    }
  }
}

createTree(tree, food);
