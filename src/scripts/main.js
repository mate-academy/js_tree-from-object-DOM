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
    const listElement = document.createElement('li');

    listElement.innerText = key;

    if (Object.keys(data).length !== 0) {
      createTree(listElement, data[key]);
    }
    list.append(listElement);
    element.append(list);
  }
}

createTree(tree, food);
