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
  const newList = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const newListItem = document.createElement('li');

    newListItem.innerText = key;
    newList.append(newListItem);

    if (Object.keys(value).length > 0) {
      createTree(newListItem, value);
    }
  }
  element.append(newList);
}

createTree(tree, food);
