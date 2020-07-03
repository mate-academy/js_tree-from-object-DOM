'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
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

  for (const item in data) {
    const listItem = document.createElement('li');

    listItem.innerText = item;

    if (typeof data[item] === 'object') {
      createTree(listItem, data[item]);
    }

    list.append(listItem);
  }

  element.append(list);
}

createTree(tree, food);
