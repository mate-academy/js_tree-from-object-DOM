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

  Object.keys(data).forEach(e => {
    const li = document.createElement('li');

    li.append(e);
    createTree(li, data[e]);
    ul.append(li);
  });

  element.append(ul);
}

createTree(tree, food);
