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

function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }

  return true;
}

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    if (!isEmpty(data[key])) {
      createTree(listItem, { ...data[key] });
    }

    list.append(listItem);
  }

  element.append(list);
}

createTree(tree, food);
