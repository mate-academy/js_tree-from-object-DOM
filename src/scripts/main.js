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
  const list = document.createElement('ul');

  for (const key in data) {
    if (Object.keys(data).length === 0) {
      return;
    }

    const listElement = document.createElement('li');

    listElement.innerText = key;
    list.append(listElement);

    createTree(listElement, data[key]);
  }

  element.append(list);
}

createTree(tree, food);
