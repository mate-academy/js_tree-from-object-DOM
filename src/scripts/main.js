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
  function rec(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const listItem = document.createElement('li');

      listItem.innerHTML = key;

      const childrenUl = rec(obj[key]);

      listItem.append(childrenUl);
      ul.append(listItem);
    }

    return ul;
  }

  element.append(rec(data));
}

createTree(tree, food);
