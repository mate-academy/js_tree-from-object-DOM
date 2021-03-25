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
  const lengthsOfKeys = Object.keys(data).length;

  if (!lengthsOfKeys) {
    return;
  }

  const list = document.createElement('ul');

  element.append(list);

  for (const key in data) {
    const elementLi = document.createElement('li');

    elementLi.textContent = key;

    list.append(elementLi);

    const nextData = data[key];

    createTree(elementLi, nextData);
  }
}

createTree(tree, food);
