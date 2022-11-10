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
  for (const text of data) {
    const list = document.createElement('ul');
    const listItem = document.createElement('li');

    listItem.innerText = text;
    list.append(listItem);
    element.append(list);

    if (Object.keys(data[text]).length > 0) {
      createTree(listItem, data[text]);
    }
  }
}

createTree(tree, food);
