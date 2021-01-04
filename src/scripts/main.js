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

  element.append(list);

  for (const item in data) {
    const newLi = document.createElement('li');

    newLi.innerText = item;
    list.append(newLi);

    if (Object.keys(data[item]).length !== 0) {
      createTree(newLi, data[item]);
    }
  }
}

createTree(tree, food);
