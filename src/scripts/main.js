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

  for (const foodEl in data) {
    const listItem = document.createElement('li');

    element.append(list);
    listItem.innerText = foodEl;
    list.append(listItem);

    if (Object.keys(data[foodEl]).length < 0) {
      return;
    }

    createTree(listItem, data[foodEl]);
  }
}

createTree(tree, food);
