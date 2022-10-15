'use strict';

const isEmpty = require('../../node_modules/lodash/isEmpty');

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
  const list = createEl('ul');

  addElement(element, list);

  for (const key in data) {
    const listItem = createEl('li');

    addElement(list, listItem);

    listItem.innerText = key;

    if (!isEmpty(data[key])) {
      createTree(listItem, data[key]);
    }
  }
}

function addElement(parentEl, childEl) {
  parentEl.insertAdjacentElement('beforeend', childEl);
}

function createEl(tagName) {
  return document.createElement(tagName);
}

createTree(tree, food);
