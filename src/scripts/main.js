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

  for (const [key, value] of Object.entries(data)) {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    if (Object.keys(value).length) {
      createTree(list, value);
    }
  }

  element.append(list);
}

createTree(tree, food);
