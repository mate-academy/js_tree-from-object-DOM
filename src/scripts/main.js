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

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.innerText = key;
    list.append(listItem);

    if (Object.keys(data[key]).length) {
      createTree(listItem, data[key]);
    }
  }
}

createTree(tree, food);
