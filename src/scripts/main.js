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
  function createTreeDom(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const listItem = document.createElement('li');

      listItem.innerHTML = key;

      const childrenUl = createTreeDom(obj[key]);

      listItem.append(childrenUl);
      ul.append(listItem);
    }

    return ul;
  }

  element.append(createTreeDom(data));
}

createTree(tree, food);
