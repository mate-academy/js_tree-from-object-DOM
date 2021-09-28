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

  for (const el in data) {
    const listItem = document.createElement('li');
    const elLength = Object.keys(data[el]).length;

    listItem.textContent = el;
    list.append(listItem);

    if (elLength > 1) {
      createTree(listItem, data[el]);
    }
  }
}

createTree(tree, food);
