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

  element.append(list);

  for (const dataKey in data) {
    const listItem = document.createElement('li');

    listItem.textContent = dataKey;
    list.append(listItem);

    if (Object.keys(data[dataKey]).length > 0) {
      createTree(listItem, data[dataKey]);
    }
  }
}

createTree(tree, food);
