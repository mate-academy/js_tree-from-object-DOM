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
    const itemList = document.createElement('li');

    itemList.textContent = item;
    list.append(itemList);

    if (typeof data[item] === 'object') {
      createTree(itemList, data[item]);
    }
  }

  element.append(list);
}

createTree(tree, food);
