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
  const uList = document.createElement('ul');

  Object.entries(data).forEach(([key, value]) => {
    const listItem = document.createElement('li');

    listItem.append(key);
    uList.append(listItem);

    if (Object.keys(value).length) {
      createTree(listItem, value);
    }
  });

  element.append(uList);
}

createTree(tree, food);
