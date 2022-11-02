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
    const listItem = document.createElement('li');

    listItem.innerText = key;
    list.append(listItem);

    if (Object.keys(value).length > 0) {
      createTree(listItem, value);
    }
  }
  element.append(list);
}

createTree(tree, food);
