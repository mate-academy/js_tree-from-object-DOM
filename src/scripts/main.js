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

  for (const dataItem in data) {
    const listItem = document.createElement('li');

    listItem.textContent = dataItem;
    list.append(listItem);

    element.append(list);

    createTree(listItem, data[dataItem]);
  }
}

createTree(tree, food);
