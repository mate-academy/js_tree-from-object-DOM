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

  for (const key in data) {
    const isObject = Object.entries(data[key]).length > 0;

    const item = document.createElement('li');

    item.innerText = key;
    element.append(list);
    list.append(item);

    if (isObject) {
      createTree(list, data[key]);
    }
  }
}

createTree(tree, food);
