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

  for (const [key, value] of Object.entries(data)) {
    const listElement = document.createElement('li');

    listElement.textContent = key;
    list.append(listElement);

    if (Object.keys(value).length) {
      createTree(listElement, value);
    }
  }
  element.append(list);
}

createTree(tree, food);
