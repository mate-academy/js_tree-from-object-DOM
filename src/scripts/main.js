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
  const List = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.innerHTML = key;
    List.append(listItem);

    if (Object.keys(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }
  }

  element.append(List);
}

createTree(tree, food);
