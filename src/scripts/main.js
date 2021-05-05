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
  if (Object.keys(data).length === 0) {
    return;
  }

  const keys = Object.keys(data);
  const list = document.createElement('ul');
  let nextElem;
  let nextData;

  for (const key of keys) {
    nextElem = document.createElement('li');
    nextElem.textContent = `${key}`;
    list.append(nextElem);
    nextData = data[`${key}`];
    createTree(nextElem, nextData);
  }

  element.append(list);
}

createTree(tree, food);
