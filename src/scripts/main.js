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

  if (Object.keys(data).length > 0) {
    element.append(list);
  };

  for (const [key, value] of Object.entries(data)) {
    const item = document.createElement('li');

    item.textContent = key;

    list.append(item);

    createTree(item, value);
  };
}

createTree(tree, food);
