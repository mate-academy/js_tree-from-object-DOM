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

  for (const item in data) {
    const listElement = document.createElement('li');

    listElement.textContent = item;
    list.append(listElement);

    if (item !== {}) {
      createTree(listElement, data[item]);
    }

    element.append(list);
  }
}

createTree(tree, food);
