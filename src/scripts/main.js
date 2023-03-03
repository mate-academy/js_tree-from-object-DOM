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

function getNestedObjects(data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;

    if (JSON.stringify(data[key]) !== '{}') {
      const listChildren = getNestedObjects(data[key]);

      item.append(listChildren);
    }

    list.append(item);
  }

  return list;
}

function createTree(element, data) {
  element.append(getNestedObjects(data));
}

createTree(tree, food);
