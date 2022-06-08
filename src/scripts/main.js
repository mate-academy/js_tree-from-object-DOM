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
  const elemUl = document.createElement('ul');

  element.append(elemUl);

  for (const key in data) {
    if (typeof data[key] === 'object' && data[key] !== null) {
      const elemLi = document.createElement('li');

      elemLi.textContent = key;
      elemUl.append(elemLi);

      createTree(elemUl, data[key]);
    } else {
      const elemLi = document.createElement('li');

      elemLi.textContent = key;
      elemUl.append(elemLi);
    }
  }
}

createTree(tree, food);
