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
  if (Object.keys(data).length) {
    const list = document.createElement('ul');

    element.append(list);

    for (const key in data) {
      const listInList = document.createElement('li');

      listInList.textContent = key;

      list.append(listInList);
      createTree(listInList, data[key]);
    }
  }
}

createTree(tree, food);
