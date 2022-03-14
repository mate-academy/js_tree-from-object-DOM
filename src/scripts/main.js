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
  const list = document.createElement('ul');

  for (const elem in data) {
    const listElem = document.createElement('li');

    listElem.innerText = elem;

    if (Object.keys(data[elem]).length !== 0) {
      createTree(listElem, data[elem]);
    }

    list.appendChild(listElem);
  }

  element.appendChild(list);
}

createTree(tree, food);
