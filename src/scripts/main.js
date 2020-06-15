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

  if (Object.keys(data).length) {
    for (const [key, value] of Object.entries(data)) {
      const listItem = document.createElement('li');

      listItem.textContent = key;
      list.append(listItem);

      createTree(list, value);
    }
    element.append(list);
  }
}

createTree(tree, food);
