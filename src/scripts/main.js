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
  const keys = Object.keys(data);
  const list = document.createElement('ul');

  keys.forEach(key => {
    if (data[key] !== {}) {
      element.append(list);

      const listElement = document.createElement('li');

      const textNode = document.createTextNode(key);

      listElement.append(textNode);
      list.append(listElement);

      createTree(listElement, data[key]);
    }
  });
}

createTree(tree, food);
