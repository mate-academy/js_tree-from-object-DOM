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
  if (Object.keys(data).length) {
    const list = document.createElement('ul');

    element.append(list);

    for (const key in data) {
      const listItem = document.createElement('li');

      listItem.textContent = key;
      list.append(listItem);
      createTree(listItem, data[key]);
    };
  };
}

createTree(tree, food);
