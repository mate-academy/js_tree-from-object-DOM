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

  for (const keys in data) {
    const listItems = document.createElement('li');

    listItems.innerText = keys;
    list.append(listItems);
    element.append(list);

    if (data[keys]) {
      createTree(listItems, data[keys]);
    }
  }
}

createTree(tree, food);
