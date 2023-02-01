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
  const ul = document.createElement('ul');

  for (const one in data) {
    const firstLi = document.createElement('li');

    firstLi.innerText = one;
    element.append(ul);
    ul.append(firstLi);

    if (Object.keys(data[one]).length > 0) {
      createTree(firstLi, data[one]);
    }
  }
}

createTree(tree, food);
