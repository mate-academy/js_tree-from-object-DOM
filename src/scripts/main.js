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
  let listContainer = element;

  function createItems(obj) {
    if (Object.keys(obj).length !== 0) {
      const listItem = document.createElement('ul');

      listContainer.append(listItem);

      for (const key in obj) {
        const item = document.createElement('li');

        item.textContent = key;
        listItem.append(item);
        listContainer = item;
        createItems(obj[key]);
      }
    }
  }
  createItems(data);
}

createTree(tree, food);
