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
  const main = document.createElement('ul');
  for (let key in data) {
    const el = document.createElement('li');
    el.innerText = key;
    main.append(el);
    element.append(main);
    if (Object.keys(data[key]).length > 0) {
      createTree(main, data[key]);
    }
  }
  return element;
}

createTree(tree, food);
