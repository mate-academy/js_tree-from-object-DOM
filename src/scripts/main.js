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
  const listUl = document.createElement('ul');

  for (const key in data) {
    const itemLi = document.createElement('li');

    itemLi.innerText = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(itemLi, data[key]);
    }

    listUl.append(itemLi);
  }
  element.append(listUl);
}

createTree(tree, food);
