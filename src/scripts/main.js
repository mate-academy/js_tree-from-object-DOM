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
  const newUnorderedList = document.createElement('ul');

  element.append(newUnorderedList);

  for (const [key, value] of Object.entries(data)) {
    const newListItem = document.createElement('li');

    newUnorderedList.append(newListItem);

    newListItem.textContent = key;

    if (Object.keys(value).length) {
      createTree(newListItem, value);
    }
  }
}

createTree(tree, food);
