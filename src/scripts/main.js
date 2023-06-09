'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
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
  const rootList = document.createElement('ul');

  element.appendChild(rootList);

  function createListItems(parentElement, obj) {
    for (const key in obj) {
      const listItem = document.createElement('li');

      listItem.textContent = key;

      parentElement.appendChild(listItem);

      if (Object.keys(obj[key]).length > 0) {
        const nestedList = document.createElement('ul');

        listItem.appendChild(nestedList);
        createListItems(nestedList, obj[key]);
      }
    }
  }

  createListItems(rootList, data);
}

createTree(tree, food);
