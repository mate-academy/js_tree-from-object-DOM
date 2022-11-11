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

  for (const value in data) {
    const listItem = document.createElement('li');

    listItem.append(value);
    list.append(listItem);

    if (Object.keys(data[value]).length) {
      createTree(listItem, data[value]);
    }
  }
  element.append(list);
}

createTree(tree, food);
