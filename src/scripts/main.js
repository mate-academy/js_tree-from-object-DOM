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
  for (const key in data) {
    if (typeof data[key] === 'object') {
      const listInList = document.createElement('li');

      listInList.textContent = key;
      element.appendChild(listInList);

      const listInListItems = document.createElement('ul');

      listInList.appendChild(listInListItems);

      createTree(listInListItems, data[key]);
    } else {
      const listItem = document.createElement('li');

      listItem.textContent = data[key];

      element.appendChild(listItem);
    }
  }
}

createTree(tree, food);
