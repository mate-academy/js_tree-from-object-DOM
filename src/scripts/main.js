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
  for (const el in data) {
    const list = document.createElement('ul');
    const listItem = document.createElement('li');

    listItem.innerText = el;
    list.append(listItem);
    element.append(list);

    if (Object.keys(data[el]).length) {
      createTree(listItem, data[el]);
    }
  }
}

createTree(tree, food);
