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
  for (const prop in data) {
    const ul = document.createElement('ul');

    element.append(ul);

    const item = document.createElement('li');

    item.textContent = prop;
    ul.append(item);

    if (typeof data[prop] === 'object') {
      createTree(ul, data[prop]);
    }
  }
}

createTree(tree, food);
