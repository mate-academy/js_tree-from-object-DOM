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
  for (const one in data) {
    const firstLi = document.createElement('li');

    firstLi.innerText = one;
    element.append(firstLi);

    if (Object.keys(data[one]).length) {
      const list = document.createElement('ul');

      createTree(list, data[one]);
      firstLi.append(list);
    }
  }
}

createTree(tree, food);
