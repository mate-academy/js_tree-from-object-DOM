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
  const ulList = document.createElement('ul');

  element.append(ulList);

  for (const elem in data) {
    const liList = document.createElement('li');

    liList.textContent = elem;
    ulList.append(liList);

    if (Object.keys(data[elem]).length) {
      createTree(liList, data[elem]);
    }
  }
};

createTree(tree, food);
