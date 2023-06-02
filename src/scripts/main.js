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

  element.append(list);

  Object.keys(data).forEach((key) => {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }

    list.appendChild(listItem);
  });
}

createTree(tree, food);
