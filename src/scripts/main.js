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
  element.append(addingListItems(data));
}

function addingListItems(object) {
  if (Object.keys(object).length === 0) {
    return;
  }

  const list = document.createElement('ul');

  for (const key in object) {
    const listItem = document.createElement('li');

    listItem.innerText = key;

    const innerItem = addingListItems(object[key]);

    if (innerItem) {
      listItem.append(innerItem);
    }

    list.append(listItem);
  }

  return list;
}

createTree(tree, food);
