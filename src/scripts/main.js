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

  for (const key of Object.keys(data)) {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    if (Object.values(data[key])) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
